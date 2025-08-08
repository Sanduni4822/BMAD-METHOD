// server.js
require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const hrRoutes = require('./bmad-core/agent-templates/hr-agent/hrRoutes');
const crmRoutes = require('./bmad-core/agent-templates/crm-agent/crmRoutes');
const chatbotRoutes = require('./bmad-core/agent-templates/chatbot-agent/chatbotRoutes');
const seoRoutes = require('./bmad-core/agent-templates/seo-agent/seoRoutes');
const connectDB = require('./bmad-core/config/db'); 

// Initialize the Express app
const app = express();

// Connect to the database
connectDB(); 

// Middleware to parse incoming JSON data in the request body
app.use(bodyParser.json());

// Set up the routes for the different agents
app.use('/hr', hrRoutes);
app.use('/crm', crmRoutes);
app.use('/chatbot', chatbotRoutes);
app.use('/seo', seoRoutes);

// Set the port for the server (use PORT from .env, default to 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});