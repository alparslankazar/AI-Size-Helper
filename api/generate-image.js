// Dosya Yolu: /api/generate-image.js
// Bu kod, sizin mevcut /api/gemini.js dosyanızla aynı mantıkta çalışır.

export default async function handler(req, res) {
  // Sadece POST isteklerini kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  try {
    // 1. Frontend'den gelen payload'u al
    const { payload } = req.body;
    if (!payload || !payload.prompt) {
      return res.status(400).json({ error: 'Eksik veya geçersiz istek: prompt gerekli.' });
    }

    // 2. API Key'i güvenli ortam değişkeninden al
    const apiKey = process.env.IMAGEN_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Sunucu yapılandırma hatası: IMAGEN_API_KEY bulunamadı.' });
    }

    // 3. Google Imagen API'si için doğru URL'i ve payload'u oluştur
    // Bu, Gemini'den farklı bir URL ve payload yapısıdır.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

    const googleApiPayload = {
      instances: [
        { "prompt": payload.prompt }
      ],
      parameters: {
        "sampleCount": 1
      }
    };

    // 4. Google Imagen API'sine fetch isteği gönder
    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(googleApiPayload),
    });

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error('Google API Hatası:', errorBody);
      throw new Error(`Google API Hatası: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    // 5. Gelen base64 verisini Data URL'e çevir ve frontend'e gönder
    const imageBase64 = data?.predictions?.[0]?.bytesBase64Encoded;
    if (!imageBase64) {
      throw new Error("Google API'sinden geçerli bir görsel verisi alınamadı.");
    }
    
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    // Frontend'in beklediği formatta cevabı gönder
    res.status(200).json({ imageUrl: imageUrl });

  } catch (error) {
    console.error('API rotasında hata:', error);
    res.status(500).json({ error: error.message });
  }
}
