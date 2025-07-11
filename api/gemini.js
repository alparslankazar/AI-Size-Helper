// Sunucu tarafında
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY missing.' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const geminiPayload = {
    contents: [{
      role: "user",
      parts: [{ text: prompt }]
    }]
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload)
    });
    const data = await response.json();

    // Gemini cevabını uygun hale getir!
    const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    // Eğer text geliyorsa string olarak döner
    if (geminiText) {
      return res.status(200).json({ response: geminiText });
    }
    return res.status(500).json({ error: "Gemini response boş veya hatalı", data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
