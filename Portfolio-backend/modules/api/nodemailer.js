// Import required modules
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create a transporter object using the default SMTP transport with Gmail service
// The authentication credentials are pulled from environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email
// Takes the recipient's email, subject, and text content as parameters
const sendEmail = async (email, subject, text) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject,
    text,
  };

  try {
    // Attempt to send the email
    const info = await transporter.sendMail(mailOptions);
    // Return success and the info object if email is sent successfully
    return { success: true, info };
  } catch (error) {
    // Return failure and the error object if there's an issue
    return { success: false, error };
  }
};

module.exports = {
  sendEmail,
};
