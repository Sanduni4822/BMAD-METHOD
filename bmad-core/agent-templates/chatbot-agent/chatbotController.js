// bmad-core/agent-templates/chatbot-agent/chatbotController.js

const mongoose = require('mongoose');

// Define a schema for your data
const agentSchema = new mongoose.Schema({
    prompt: String,
    response: String,
    timestamp: { type: Date, default: Date.now }
});

// Create a model based on the schema
const Agent = mongoose.model('Agent', agentSchema);

// This function handles user queries and saves them to the database
async function respondToQuery(userQuery) {
    const responses = {
        "hello": "Hi! How can I assist you today?",
        "bye": "Goodbye! Have a great day!",
        "default": "Sorry, I didn't understand that."
    };

    const response = responses[userQuery.toLowerCase()] || responses["default"];

    // Save the query and response to the database
    try {
        const newAgentEntry = new Agent({
            prompt: userQuery,
            response: response
        });
        await newAgentEntry.save();
        console.log('Query and response saved to database');
    } catch (err) {
        console.error('Error saving to database:', err.message);
    }

    return response;
}

module.exports = { respondToQuery };