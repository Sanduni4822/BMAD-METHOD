const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Define a Mongoose Schema and Model for employee data
const employeeSchema = new mongoose.Schema({
    employeeName: String,
    employeeEmail: String,
    onboardingDate: { type: Date, default: Date.now }
});
const Employee = mongoose.model('Employee', employeeSchema);

// Send welcome email
async function sendWelcomeEmail(employeeName, employeeEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: employeeEmail,
        subject: `Welcome to the Company, ${employeeName}`,
        text: `Hello ${employeeName},\n\nWelcome to our team!`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        // Save the new employee data to the database after sending email
        const newEmployee = new Employee({
            employeeName: employeeName,
            employeeEmail: employeeEmail
        });
        await newEmployee.save();
        console.log('Employee data saved to database');

        return { success: true, message: 'Welcome email sent and data saved.' };
    } catch (error) {
        console.error('Error sending email or saving data:', error);
        return { success: false, message: 'Error occurred.' };
    }
}

module.exports = { sendWelcomeEmail };