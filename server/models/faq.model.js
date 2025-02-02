const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        translations: {
            hi: {type: String},
            bn: {type: String},
            en: {type: String},
        },
    },
    {timestamps: true}
);

FAQSchema.methods.getTranslatedQuestion = function (lang) {
    return this.translations[lang] || this.question;
};

const FAQ = mongoose.model("FAQ", FAQSchema);
module.exports = FAQ;