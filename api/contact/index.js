const nodemailer = require("nodemailer");

module.exports = async function (context, req) {
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    context.res = { status: 400, body: { error: "Name, email, and message are required." } };
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"AI Transform" <${process.env.SMTP_USERNAME}>`,
      to: process.env.SMTP_USERNAME,
      replyTo: email,
      subject: `New AI Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    context.res = { status: 200, body: { success: true } };
  } catch (err) {
    context.log.error("Email send failed:", err);
    context.res = { status: 500, body: { error: "Failed to send email." } };
  }
};
