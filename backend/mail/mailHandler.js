//import node mailer
const nodemailer = require("nodemailer");
let hbs = require('nodemailer-express-handlebars');

/*
    # This function handles all the outgoing mail
    # The arguments it takes are as follows
    # recipient - string - the recipients email
    # subject - string - the subject of the email
    # text - string - the content of the email

*/
const sendResetMail = async (recipient,subject,link) =>{
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            port:587,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASSWORD,
            },
        })
        let mailOptions = {
            from:process.env.MAIL_USER,
            to:recipient,
            subject:subject,
            html:`
            <body>
            <h1 class="">Reset your password</h1>
            <p>We recieved a request to reset your password, if this was not you please ignore this email.</p>
            <p>If this was you please click this link to reset your password</p>
                    <a style="word-wrap: break-word" class="text-center text-wrap" href="${link}">${link}</a>
            </body>`,
        };
        transporter.sendMail(mailOptions,(err,data)=>{
            if(err){
                console.log(err);
                resolve(false);
            }else{
                console.log(data);
                resolve(true);
            }
        })
        });
}
module.exports = sendResetMail;