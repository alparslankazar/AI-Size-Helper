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

    // Kod bloğu/backtick temizliği
    let geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (geminiText) {
      geminiText = geminiText.trim();
      if (geminiText.startsWith("```json")) {
        geminiText = geminiText.replace(/^```json/, "").replace(/```$/, "").trim();
      } else if (geminiText.startsWith("```")) {
        geminiText = geminiText.replace(/^```/, "").replace(/```$/, "").trim();
      }
      // === YENİ: Kontrol karakterlerini güvenli hale getir! ===
      // Tüm satır sonu, carriage return ve kontrol karakterlerini escape et.
      geminiText = geminiText
        .replace(/[\u0000-\u001F]+/g, " ") // Tüm kontrol karakterleri boşluğa çevir
        .replace(/\\n/g, "\\n")            // Eğer stringde \n varsa \\n bırak
        .replace(/\\r/g, "\\r");           // Eğer stringde \r varsa \\r bırak

      // Alternatif olarak (daha güvenli, frontend'de doğrudan parse):
      // geminiText = JSON.stringify(geminiText);

      return res.status(200).json({ response: geminiText });
    }
    return res.status(500).json({ error: "Gemini response boş veya hatalı", data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
