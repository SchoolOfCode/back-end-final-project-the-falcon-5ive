const nodemailer = require("nodemailer");

function sendEmail(userEmail, subject, text) {
  console.log(userEmail, subject, text);

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "societly.soc@outlook.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const msg = {
    from: "societly.soc@outlook.com", // sender address
    to: `${userEmail}`, // list of receivers
    subject: `${subject}`, // Subject line
    // text: `<img src=""/> ${text}`, // plain text body
    html: `${text} <br/> <br/> <img src="https://i.imgur.com/E4SBeVw.png" width="700px" height="auto"/> <br/> <br/> If you would like to stop recieving these emails, please go to <a>https://societly.netlify.app</a> and unsubscribe from your profile settings`, // html body
    //check if we can link to a html file
    // backticks html: `<img />`
  };
  // send mail with defined transport object
  //   const info = await transporter.sendMail(msg);

  transporter.sendMail(msg, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// var CronJob = require("cron").CronJob;
// var job = new CronJob(
//   "0 0 0 0 0-11 *",
//   function () {
//     sendEmail(
//       "za.qa@outlook.com",
//       "Every hour",
//       "this is just a test to see if I get the email every hour or not"
//     );
//     console.log("You will see this message every second");
//   },
//   null,
//   true,
//   "America/Los_Angeles"
// );
// job.start();

module.exports = { sendEmail };
// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }

// Just to let you know, from now on, you will be recieving email notifications whenever and event is created or deleted and you can opt-out of this by logging into SoCielty and chnaging your profile settings (Link)
