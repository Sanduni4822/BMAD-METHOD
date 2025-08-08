const express = require('express');
const router = express.Router();
const { respondToQuery } = require('./chatbotController');

// Route to handle user queries
router.post('/query', (req, res) => {
    // Extract 'userQuery' from the request body
    const { userQuery } = req.body;
    
    // Call the respondToQuery function with the 'userQuery'
    const response = respondToQuery(userQuery);
    
    // Send the chatbot's response back to the client
    res.status(200).json({ response });
});

module.exports = router;