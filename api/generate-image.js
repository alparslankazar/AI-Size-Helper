// Dosya Yolu: /api/generate-image.js

export default async function handler(req, res) {
  // Sadece POST isteklerini kabul et
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // 1. Frontend'den gelen payload'u al
    const { payload } = req.body;
    if (!payload || !payload.prompt) {
      return res.status(400).json({ error: 'Eksik veya geçersiz istek: prompt gerekli.' });
    }

    // 2. Vercel Ortam Değişkenlerinden Gerekli Bilgileri Al
    const GOOGLE_API_KEY = process.env.IMAGEN_API_KEY;
    const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID; // Bu yeni eklenecek!

    if (!GOOGLE_API_KEY || !GOOGLE_PROJECT_ID) {
      return res.status(500).json({ error: 'Sunucu yapılandırması eksik: IMAGEN_API_KEY veya GOOGLE_PROJECT_ID bulunamadı.' });
    }

    // 3. Google Vertex AI için doğru API endpoint'ini oluştur
    const API_ENDPOINT = `https://us-central1-aiplatform.googleapis.com/v1/projects/${GOOGLE_PROJECT_ID}/locations/us-central1/publishers/google/models/imagegeneration@006:predict`;

    // 4. Google'ın beklediği payload formatını oluştur
    const googleApiPayload = {
      instances: [
        { "prompt": payload.prompt }
      ],
      parameters: {
        "sampleCount": 1
      }
    };

    // 5. Google Imagen API'sine çağrıyı yap
    // Not: Bu çağrıda API anahtarı URL'de değil, header'da gönderilir.
    const apiResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GOOGLE_API_KEY}`
      },
      body: JSON.stringify(googleApiPayload),
    });

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error('Google API Hatası:', errorBody);
      throw new Error(`Google API Hatası: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    // 6. Gelen base64 verisini Data URL'e çevir ve frontend'e gönder
    const imageBase64 = data?.predictions?.[0]?.bytesBase64Encoded;
    if (!imageBase64) {
      throw new Error("Google API'sinden geçerli bir görsel verisi alınamadı.");
    }
    
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    res.status(200).json({ imageUrl: imageUrl });

  } catch (error) {
    console.error('API rotasında hata:', error.message);
    res.status(500).json({ error: `Sunucu hatası: ${error.message}` });
  }
}
