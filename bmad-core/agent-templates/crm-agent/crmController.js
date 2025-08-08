const nodemailer = require('nodemailer');

// Function to send a promotional email to a customer
function sendPromoEmail(customerName, customerEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: customerEmail,
        subject: `Special Offer for ${customerName}`,
        text: `Hello ${customerName},\n\nWe have a special offer for you! Check out our new deals.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = { sendPromoEmail };
