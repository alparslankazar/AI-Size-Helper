// Dosya Yolu: /api/generate-image.js
// Bu kod, sadece API anahtarı kullanarak doğru Imagen 4.0 endpoint'ine bağlanır.

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

    // 2. API Key'i güvenli ortam değişkeninden al
    const apiKey = process.env.IMAGEN_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Sunucu yapılandırması eksik: IMAGEN_API_KEY bulunamadı.' });
    }

    // 3. DOĞRU IMAGEN 4.0 ULTRA API URL'ini oluştur
    const modelId = "imagen-4.0-ultra-generate-preview-06-06"; // Model, "Ultra" olarak güncellendi.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:predict?key=${apiKey}`;

    // 4. Google'ın bu API için beklediği payload formatı
    const googleApiPayload = {
      instances: [
        { "prompt": payload.prompt }
      ],
      parameters: {
        "sampleCount": 1
      }
    };

    // 5. Google Imagen 4.0 API'sine fetch isteği gönder
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

    // 6. Gelen base64 verisini Data URL'e çevir ve frontend'e gönder
    const imageBase64 = data?.predictions?.[0]?.bytesBase64Encoded;
    if (!imageBase64) {
      throw new Error("Google API'sinden geçerli bir görsel verisi alınamadı.");
    }
    
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    // Frontend'in beklediği formatta cevabı gönder
    res.status(200).json({ imageUrl: imageUrl });

  } catch (error) {
    console.error('API rotasında hata:', error.message);
    res.status(500).json({ error: `Sunucu hatası: ${error.message}` });
  }
}
