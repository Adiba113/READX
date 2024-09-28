const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { email, message } = req.body;  // Get email and message from request body

  try {
    // Set up transporter using Ethereal or any SMTP provider
    let transporter = await nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'heather5@ethereal.email',  // Replace with your Ethereal user
        pass: '6EnZqUyAxdkBaNPWFd'         // Replace with your Ethereal password
      }
    });

    // Send the email
    let info = await transporter.sendMail({
      from: '"Srabani Mitra 👻" <heather5@ethereal.email>',  // Sender
      to: ,  // Send to the email provided by the user
      subject: "Contact Form Submission",  // Subject
      text: message,  // Plain text message
      html: `<p>${message}</p>`,  // HTML version of the message
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};

module.exports = sendMail;
