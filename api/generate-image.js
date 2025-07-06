// /api/generate-image.js - Debug Version

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
    
    console.log('🔍 Request payload:', payload);

    const GOOGLE_API_KEY = process.env.IMAGEN_API_KEY;
    const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;
    
    console.log('🔑 API Key exists:', !!GOOGLE_API_KEY);
    console.log('🏗️ Project ID:', GOOGLE_PROJECT_ID);
    
    if (!GOOGLE_API_KEY) {
      return res.status(500).json({ error: 'IMAGEN_API_KEY eksik' });
    }

    // İlk test: Models endpoint
    console.log('🧪 Models endpoint test ediliyor...');
    
    const modelsResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GOOGLE_API_KEY}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('📊 Models response status:', modelsResponse.status);

    if (!modelsResponse.ok) {
      const errorText = await modelsResponse.text();
      console.error('❌ Models endpoint hatası:', errorText);
      return res.status(modelsResponse.status).json({ 
        error: `Models API hatası: ${modelsResponse.status}`,
        details: errorText
      });
    }

    const modelsData = await modelsResponse.json();
    console.log('✅ Available models:', modelsData.models?.length || 0);
    
    // Imagen modellerini kontrol et
    const imagenModels = modelsData.models?.filter(m => 
      m.name.includes('imagen') || m.name.includes('image')
    ) || [];
    
    console.log('🎨 Imagen models:', imagenModels.map(m => m.name));

    if (imagenModels.length === 0) {
      return res.status(400).json({ 
        error: 'Imagen modelleri bulunamadı',
        availableModels: modelsData.models?.map(m => m.name) || []
      });
    }

    // En uygun Imagen modelini seç
    const imagenModel = imagenModels.find(m => m.name.includes('imagen-3')) || 
                       imagenModels.find(m => m.name.includes('imagen')) ||
                       'models/imagen-3.0-generate-001';

    console.log('🎯 Using model:', imagenModel.name || imagenModel);

    // Görsel oluşturma API çağrısı
    const generateEndpoint = `https://generativelanguage.googleapis.com/v1beta/${imagenModel.name || imagenModel}:generateImages?key=${GOOGLE_API_KEY}`;
    
    console.log('🚀 Generate endpoint:', generateEndpoint.replace(GOOGLE_API_KEY, 'HIDDEN'));

    const requestPayload = {
      prompt: payload.prompt || "A simple black t-shirt on white background",
      generationConfig: {
        aspectRatio: "1:1",
        seed: payload.seed || 500097
      }
    };

    console.log('📝 Request payload:', requestPayload);

    const generateResponse = await fetch(generateEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestPayload),
    });

    console.log('📡 Generate response status:', generateResponse.status);

    if (!generateResponse.ok) {
      const errorText = await generateResponse.text();
      console.error('❌ Generate hatası:', errorText);
      return res.status(generateResponse.status).json({ 
        error: `Görsel oluşturma hatası: ${generateResponse.status}`,
        details: errorText,
        endpoint: generateEndpoint.replace(GOOGLE_API_KEY, 'HIDDEN')
      });
    }

    const generateData = await generateResponse.json();
    console.log('✅ Generate response keys:', Object.keys(generateData));

    const generatedImages = generateData?.generatedImages;
    if (!generatedImages || generatedImages.length === 0) {
      return res.status(500).json({ 
        error: 'Görsel verisi bulunamadı',
        responseData: generateData
      });
    }

    const imageData = generatedImages[0];
    const imageBase64 = imageData.bytesBase64Encoded || imageData.bytes;
    
    if (!imageBase64) {
      return res.status(500).json({ 
        error: 'Base64 verisi bulunamadı',
        imageData: imageData
      });
    }
    
    console.log('🎨 Görsel başarıyla oluşturuldu!');
    
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    return res.status(200).json({ 
      imageUrl: imageUrl,
      success: true,
      message: 'Imagen API çalışıyor!',
      model: imagenModel.name || imagenModel,
      debug: {
        modelsCount: modelsData.models?.length,
        imagenModelsCount: imagenModels.length
      }
    });

  } catch (error) {
    console.error('💥 Catch bloğu hatası:', error);
    return res.status(500).json({ 
      error: `Sistem hatası: ${error.message}`,
      stack: error.stack
    });
  }
}
