var express = require("express");
var router = express.Router();

const { sendEmail } = require("../models/nodemailer");

router.post("/", async (req, res) => {
  const email = req.body;

  let emailContent = email.to.join(", ");

  sendEmail(emailContent, email.subject, email.text);

  res.send("Email Sent!");
});

module.exports = router;
