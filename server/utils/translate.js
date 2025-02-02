const axios = require("axios");

const GOOGLE_TRANSLATE_API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your API Key

async function translateText(text, targetLang) {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      {},
      {
        params: {
          q: text,
          target: targetLang,
          key: GOOGLE_TRANSLATE_API_KEY,
        },
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to original text
  }
}

module.exports = translateText;
