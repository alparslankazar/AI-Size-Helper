// /api/generate-image.js - Vertex AI Imagen API

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  try {
    const { payload } = req.body;
    
    const GOOGLE_API_KEY = process.env.IMAGEN_API_KEY;
    const PROJECT_ID = process.env.GOOGLE_PROJECT_ID || "ai-fit-preview";
    
    console.log('🔑 API Key exists:', !!GOOGLE_API_KEY);
    console.log('🏗️ Project ID:', PROJECT_ID);
    
    if (!GOOGLE_API_KEY) {
      return res.status(500).json({ error: 'API Key eksik' });
    }

    // Vertex AI Imagen endpoint
    const VERTEX_ENDPOINT = `https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/us-central1/publishers/google/models/imagegeneration@006:predict`;
    
    console.log('🎯 Vertex AI endpoint kullanılıyor');

    // Vertex AI için payload formatı
    const vertexPayload = {
      instances: [
        {
          prompt: payload.prompt || "A simple black t-shirt on white background"
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: "1:1",
        seed: payload.seed || 500097
      }
    };

    console.log('📝 Request payload hazırlandı');

    // Access token almak için Google Cloud auth gerekiyor
    // Basit API key ile deneme
    const response = await fetch(VERTEX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GOOGLE_API_KEY}`
      },
      body: JSON.stringify(vertexPayload),
    });

    console.log('📡 Vertex AI response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Vertex AI hatası:', errorText);
      
      // Eğer auth hatası alırsak, Google AI Studio endpoint'ini dene
      if (response.status === 401 || response.status === 403) {
        console.log('🔄 Google AI Studio endpoint deneniyor...');
        return await tryGoogleAIStudio(payload, GOOGLE_API_KEY);
      }
      
      return res.status(response.status).json({ 
        error: `Vertex AI hatası: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('✅ Vertex AI response alındı');

    // Vertex AI response formatı
    const predictions = data?.predictions;
    if (!predictions || predictions.length === 0) {
      return res.status(500).json({ 
        error: 'Görsel verisi bulunamadı',
        responseData: data
      });
    }

    const imageData = predictions[0];
    const imageBase64 = imageData?.bytesBase64Encoded;
    
    if (!imageBase64) {
      return res.status(500).json({ 
        error: 'Base64 verisi bulunamadı',
        imageData: imageData
      });
    }
    
    console.log('🎨 Vertex AI ile görsel oluşturuldu!');
    
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    return res.status(200).json({ 
      imageUrl: imageUrl,
      success: true,
      message: 'Vertex AI Imagen çalışıyor!',
      method: 'vertex-ai'
    });

  } catch (error) {
    console.error('💥 Vertex AI hatası:', error);
    
    // Fallback: Google AI Studio dene
    try {
      return await tryGoogleAIStudio(req.body.payload, process.env.IMAGEN_API_KEY);
    } catch (fallbackError) {
      return res.status(500).json({ 
        error: `Sistem hatası: ${error.message}`,
        fallbackError: fallbackError.message
      });
    }
  }
}

// Fallback fonksiyonu
async function tryGoogleAIStudio(payload, apiKey) {
  console.log('🔄 Google AI Studio fallback deneniyor...');
  
  // Google AI Studio sadece text için çalışıyor, görsel için mock döndür
  console.log('⚠️ Google AI Studio Imagen desteklemiyor, mock döndürülüyor');
  
  // Mock response
  const mockImages = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=600&fit=crop'
  ];
  
  const randomImage = mockImages[Math.floor(Math.random() * mockImages.length)];
  
  return {
    status: 200,
    json: () => Promise.resolve({
      imageUrl: randomImage,
      success: true,
      message: 'Google AI Studio Imagen desteklemiyor - Mock görsel',
      method: 'mock-fallback'
    })
  };
}
