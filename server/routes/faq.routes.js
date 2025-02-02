const express = require('express');
const router = express.Router();

const { getAllFAQs, createFAQ, updateFAQ, removeFAQ } = require('../controllers/faqs.controller');


router.get('/', getAllFAQs);
router.post('/create', createFAQ);
router.put('/update/:id', updateFAQ);
router.delete('/delete/:id', removeFAQ);


module.exports = router;