// /api/generate-image.js - Basit Mock Test

export default async function handler(req, res) {
  // CORS ayarları
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
    console.log('Mock API çağrıldı');
    
    // 1-2 saniye bekle (loading simülasyonu)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Test için farklı görseller
    const testImages = [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop'
    ];
    
    const randomImage = testImages[Math.floor(Math.random() * testImages.length)];
    
    console.log('Mock görsel gönderiliyor:', randomImage);
    
    return res.status(200).json({ 
      imageUrl: randomImage,
      success: true,
      message: 'Test görseli başarıyla oluşturuldu'
    });

  } catch (error) {
    console.error('Mock API hatası:', error);
    return res.status(500).json({ 
      error: 'Mock API hatası: ' + error.message 
    });
  }
}
