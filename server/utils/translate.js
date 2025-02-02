const axios = require("axios");
require("dotenv").config();

async function translateText(text, targetLang) {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      {},
      {
        params: {
          q: text,
          target: targetLang,
          key: process.env.GOOGLE_TRANSLATE_API_KEY,
        },
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

module.exports = translateText;