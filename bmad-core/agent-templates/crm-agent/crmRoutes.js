const express = require('express');
const router = express.Router();
const { sendPromoEmail } = require('./crmController');

// CRM Agent - Send Promotional Email
router.post('/send-promo', (req, res) => {
    const { customerName, customerEmail } = req.body;
    sendPromoEmail(customerName, customerEmail);
    res.status(200).send("Promotional email sent.");
});

module.exports = router;
