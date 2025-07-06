// Dosya Yolu: /api/generate-image.js

export default async function handler(req, res) {
  // CORS headers ekle
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS request için
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

    // 2. Environment variables kontrolü
    const GOOGLE_API_KEY = process.env.IMAGEN_API_KEY;
    const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;

    if (!GOOGLE_API_KEY) {
      console.error('IMAGEN_API_KEY environment variable eksik');
      return res.status(500).json({ error: 'IMAGEN_API_KEY yapılandırması eksik.' });
    }

    if (!GOOGLE_PROJECT_ID) {
      console.error('GOOGLE_PROJECT_ID environment variable eksik');
      return res.status(500).json({ error: 'GOOGLE_PROJECT_ID yapılandırması eksik.' });
    }

    // 3. Google AI Studio API endpoint (Vertex AI değil!)
    const API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:generateImages?key=${GOOGLE_API_KEY}`;

    // 4. Google AI Studio için doğru payload formatı
    const googleApiPayload = {
      prompt: payload.prompt,
      generationConfig: {
        aspectRatio: "1:1",
        seed: payload.seed || 500097
      }
    };

    console.log('API çağrısı yapılıyor:', {
      endpoint: API_ENDPOINT.replace(GOOGLE_API_KEY, 'HIDDEN'),
      payload: googleApiPayload
    });

    // 5. Google AI Studio API çağrısı
    const apiResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(googleApiPayload),
    });

    console.log('API Response Status:', apiResponse.status);

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error('Google API Hatası:', {
        status: apiResponse.status,
        statusText: apiResponse.statusText,
        body: errorBody
      });
      
      // Hata mesajını kullanıcıya uygun şekilde gönder
      if (apiResponse.status === 403) {
        return res.status(403).json({ 
          error: 'API erişim izni reddedildi. Billing hesabı gerekli olabilir.' 
        });
      } else if (apiResponse.status === 429) {
        return res.status(429).json({ 
          error: 'Rate limit aşıldı. Lütfen biraz bekleyip tekrar deneyin.' 
        });
      } else {
        return res.status(apiResponse.status).json({ 
          error: `Google API Hatası: ${apiResponse.status} - ${apiResponse.statusText}` 
        });
      }
    }

    const data = await apiResponse.json();
    console.log('API Response Data Structure:', Object.keys(data));

    // 6. Gelen veriyi kontrol et ve base64'ü al
    const imageData = data?.generatedImages?.[0];
    if (!imageData) {
      console.error('Beklenmeyen API response yapısı:', data);
      return res.status(500).json({ 
        error: 'Google API\'sinden geçerli görsel verisi alınamadı.' 
      });
    }

    // Base64 verisini kontrol et
    let imageBase64;
    if (imageData.bytesBase64Encoded) {
      imageBase64 = imageData.bytesBase64Encoded;
    } else if (imageData.bytes) {
      imageBase64 = imageData.bytes;
    } else {
      console.error('Base64 verisi bulunamadı:', imageData);
      return res.status(500).json({ 
        error: 'Görsel verisi işlenemedi.' 
      });
    }
    
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    res.status(200).json({ imageUrl: imageUrl });

  } catch (error) {
    console.error('API rotasında hata:', {
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      error: `Sunucu hatası: ${error.message}` 
    });
  }
}
