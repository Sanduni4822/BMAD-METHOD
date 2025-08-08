const express = require('express');
const router = express.Router();
const { analyzePageContent } = require('./seoController');

// Route to analyze the content of a page for SEO
router.post('/analyze', (req, res) => {
    const { pageContent } = req.body;
    const analysis = analyzePageContent(pageContent);
    res.status(200).json(analysis);
});

module.exports = router;
