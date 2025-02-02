const FAQ = require("../models/faq.model");
const redis = require("../config/redis");
const translateText = require("../utils/translate");

exports.getAllFAQs = async (req, res) => {
  try {
    const { lang } = req.query; 
    //cache check
    const cacheKey = `faqs_${lang || "en"}`;
    const cachedData = await redis.get(cacheKey);
    if (cachedData) return res.status(200).json(JSON.parse(cachedData));
    //if not in cache, fetch faq from db
    const faqs = await FAQ.find();
    const formattedFaqs = faqs.map((faq) => ({
      question: faq.getTranslatedQuestion(lang),
      answer: faq.answer,
    }));
    // Store result in cache for 1 hour
    await redis.setex(cacheKey, 3600, JSON.stringify(formattedFaqs));
    res.status(200).json(formattedFaqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;

    // Auto-translate question into multiple languages
    const translations = {
      hi: await translateText(question, "hi"), // Hindi
      bn: await translateText(question, "bn"), // Bengali
      en: await translateText(question, "en"), // English
    };

    const newFAQ = new FAQ({ question, answer, translations });
    await newFAQ.save();

    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = await FAQ.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });

    // Update question and answer
    faq.question = question;
    faq.answer = answer;

    // Re-translate updated question
    faq.translations = {
      hi: await translateText(question, "hi"),
      bn: await translateText(question, "bn"),
      fr: await translateText(question, "fr"),
    };

    await faq.save();
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeFAQ = async (req, res) => {
  try {
    await FAQ.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "FAQ deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
