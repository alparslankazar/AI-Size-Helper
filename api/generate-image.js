// Dosya: /api/generate-image.js

import { GoogleAuth } from 'google-auth-library';
import fetch from 'node-fetch';

// Service Account JSON'u ortamdan oku
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);

const PROJECT = serviceAccount.project_id;
const LOCATION = 'us-central1'; // Imagen sadece us-central1'de çalışıyor
const MODEL = 'imagen-4.0-ultra'; // veya 'imagen-4.0'
const ENDPOINT = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/publishers/google/models/${MODEL}:predict`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // 1. Frontend'den gelen prompt'u al
    const { payload } = req.body;
    if (!payload || !payload.prompt) {
      return res.status(400).json({ error: 'Eksik veya geçersiz istek: prompt gerekli.' });
    }

    // 2. GoogleAuth ile JWT Token al
    const auth = new GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();

    // 3. Vertex AI endpointine POST at
    const apiResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token || token}`,
      },
      body: JSON.stringify({
        instances: [
          {
            prompt: payload.prompt,
            // referans image kullanacaksan ekle
            ...(payload.reference_image_url ? { image: { imageUri: payload.reference_image_url } } : {})
          }
        ],
        parameters: {
          sampleCount: 1
        }
      }),
    });

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error('Google API Hatası:', errorBody);
      throw new Error(`Google API Hatası: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    const base64 = data?.predictions?.[0]?.bytesBase64Encoded;
    if (!base64) throw new Error("Görsel üretilemedi.");
    res.status(200).json({ imageUrl: `data:image/png;base64,${base64}` });

  } catch (error) {
    console.error('API rotasında hata:', error.message);
    res.status(500).json({ error: `Sunucu hatası: ${error.message}` });
  }
}
