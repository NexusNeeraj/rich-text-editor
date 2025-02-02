const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/auth');

const { getAllFAQs, createFAQ, updateFAQ, removeFAQ } = require('../controllers/faqs.controller');


router.get('/', getAllFAQs);
router.post('/create', createFAQ);
router.put('/update/:id', isAdmin, updateFAQ);
router.delete('/delete/:id', isAdmin, removeFAQ);


module.exports = router;