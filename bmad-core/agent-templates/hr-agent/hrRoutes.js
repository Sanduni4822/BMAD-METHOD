const express = require('express');
const router = express.Router();
const { sendWelcomeEmail } = require('./hrController');

// Route to send a welcome email to an employee
router.post('/onboarding/email', async (req, res) => {
    const { employeeName, employeeEmail } = req.body;
    const result = await sendWelcomeEmail(employeeName, employeeEmail);
    if (result.success) {
        res.status(200).send('Welcome email sent and data saved.');
    } else {
        res.status(500).send('Error occurred.');
    }
});

module.exports = router;