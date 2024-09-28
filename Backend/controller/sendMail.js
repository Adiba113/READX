const nodemailer = require("nodemailer");



const sendMail =async(req,res) =>{
let testAccount = await nodemailer.createTestAccount();
let transporter =await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'frederique41@ethereal.email',
        pass: 'jswAX31nA2ThqGDY62'
    }

});
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <frederique41@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

console.log("Message sent : %s",info.messageId);
    res.json(info);
};
module.exports=sendMail

}