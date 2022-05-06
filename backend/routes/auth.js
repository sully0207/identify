/*
    # Auth routes are concerned with user authentication
    # register, login, change password, request password reset, 
*/
//Importing packages
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//Importing validation
const {isEmail} = require("validator");
//Import user authentication and mail handler
const auth = require("../authentication/verifyAuth");
const sendResetMail = require("../mail/mailHandler");
//Importing models
const User = require("../models/User");
const ResetToken = require("../models/ResetToken");
//JSON WEB TOKEN METHODS ==============================================================================================================================================================================
/*
    # Creates a webtoken for a given user and returns the user
*/
const sendToken = (user,res) =>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.header('auth-token',token).json({"success":true});
}

//REGISTER METHODS ==============================================================================================================================================================================
/*
    # Route for registering an account
    # takes a body with the following,
    # username - string
    # email - string
    # password = string
*/
router.post("/register", async (req,res)=>{
    if(req.body.password && req.body.password.length>=8){
        //password encryption using bcrypt
        const salt = await bcrypt.genSalt();
        const encryptedPassword = await bcrypt.hash(req.body.password,salt);
        try {
            //create the user in the database
            const user = await User.create({
                username:req.body.username,
                email:req.body.email,
                password:encryptedPassword,
            });
            sendToken(user,res);
            return;
        } catch (err) { //In case of error such as validation, return it to the user
            const error = handleRegisterErrors(err);
            res.status(400).json(error);
        }		
    }else{//As the password is hashed its not possible for mongoose validation to validate its length so its done manually and returns a similar error message as the handle error function
        res.status(400).json({error:[{type:"Password",message:"Minimum password length is 8 characters.",}]});
        return;
    }
});
//Validation error handling method for register database errors
const handleRegisterErrors = (err) =>{
    const response = {
        error:[],
    }
    //Validation errors - when there is a user model validation error it returns a message that starts with "User validation failed" so we can check that first
    if(err.message.includes("User validation failed")){
       Object.values(err.errors).forEach(error => {
           response.error.push({
             type:error.path,
             message:error.message,
           });
       });
    }
    //11000 is the code for duplicate data for unique fields have been found.
    if(err.code===11000){
        response.error.push({
            type:Object.keys(err.keyPattern)[0],
            message:"Already exists!",
        });
    }
    return response;
}

//SIGN IN METHODS ==============================================================================================================================================================================
/*
    # Route for logging into an account
    # takes a body with the following,
    # username - string
    # password = string
*/
router.post("/login", async (req,res)=>{
    console.log("LOGIN REQUEST:",req.body);
    //Validation - if failed return error with message
    //Check if username is blank
    if(req.body.username===""||req.body.username===null){
        res.status(400).json({error:[{type:"Username",message:"This field cannot be blank.",}]});
    }else{
        //Check if password is blank
        if(req.body.password===""||req.body.password===null){
            res.status(400).json({error:[{type:"Password",message:"This field cannot be blank.",}]});
        }else{
            //search for user using their username, if not found return error message
            const user = await User.findOne({username:req.body.username}).select('+password');
            if(!user){
                res.status(400).json({error:[{type:"Login",message:"Username or password is incorrect.",}]});
            }else{ 
                //If user is found compare given password with stored to grant auth - compared with bcrypt as the db password as thats how its stored
                const correctPassword = await bcrypt.compare(req.body.password,user.password);
                if(!correctPassword){
                    res.status(400).json({error:[{type:"Login",message:"Username or password is incorrect.",}]});
                }else{
                    //create and assign a token
                    sendToken(user,res);
                }
            }
        }
    }
});

//PASSWORD CHANGE METHODS ==============================================================================================================================================================================
/*
    # Route for requesting a password reset email
    # takes a body with the following,
    # newPassword - string
*/
router.post("/requestPasswordReset",async (req,res)=>{
    //Make sure email is a valid email before proceeding
    if(isEmail(req.body.email)){
        const user = await User.findOne({email:req.body.email});
        if(user){
            const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
            await ResetToken.create({
                token:token,
            });
            const mailSuccess = await sendResetMail(user.email,`${user.username}: Identify Password Reset`,`https://identify-app.herokuapp.com//api/auth/resetPassword?token=${token}`);
            if(mailSuccess){
                res.status(200).json({success:[{type:"Reset password",message:"If the email is valid you will receieve an email with a reset password link.",}]});
            }else{
                res.status(500).json({error:[{type:"Email",message:"There was an error sending your request. Please try again.",}]});
            }
        }else{//Even if there is no email we send them the reponse that if there is an email with that account they will receieve an email, this is so no once can know if an email has an account
            res.status(200).json({success:[{type:"Reset password",message:"If the email is valid you will receieve an email with a reset password link.",}]});
        }
    }else{
        res.status(400).json({error:[{type:"Email",message:"Please enter a valid email.",}]});
    }
});

/*
    # Route for reset password page
    # takes a query with the following,
    # token - string
*/
router.get("/resetPassword",async (req,res)=>{
    //check for any errors and assign the value
    let error = null;
    let token = req.query.token;
    if(req.query.error){
        error=req.query.error;
    };
    res.render('resetPassword',{error:error,token:token});
});
/*
    # on success password change render page
 */
router.get("/resetSuccess",(req,res)=>{
    res.render('resetSuccess');
})  
/*
    # Route for reset password post
    # takes a body with the following,
    # token - string
    # password - string
    # confirmPassword - string
*/
router.post("/resetPassword/submit",async (req,res)=>{
    //First we will check for validation errors and redierect to page if they are not valid.
    //Check token given
    if(req.body.token===""){
        res.redirect(301,`/api/auth/resetPassword?error=${"Invalid token"}`);
    }else{
        //check if password matches
        if(req.body.password != req.body.confirmPassword){
            res.redirect(301,`/api/auth/resetPassword?token=${req.body.token}&error=${"Passwords do not match"}`);
        }else{
            if(req.body.password.length<8){
                res.redirect(301,`/api/auth/resetPassword?token=${req.body.token}&error=${"Passwords needs to be at least 8 characters"}`);
            }else{
                //check if token is valid returns uer id if verified
                //is token in the database
                const resetToken = await ResetToken.findOne({token:req.body.token});
                const verified = jwt.verify(req.body.token,process.env.JWT_SECRET);
                if(!verified || !resetToken){//if the token isnt valid return error
                    res.redirect(301,`/api/auth/resetPassword?error=${"Invalid token"}`);
                }else{
                    //token is correct and password is correct
                    await changePassword(verified,req.body.password);
                    //remove token from system
                    resetToken.remove();
                    res.redirect(301,`/api/auth/resetSuccess`);
                }
            }
        }
    }
});

/*
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Route for changing password when logged in
    # takes a body with the following,
    # newPassword - string
*/
router.post("/changePassword",auth,async (req,res)=>{
    if(req.body.newPassword && req.body.newPassword.length>=8){
        const user = await changePassword(req.user,req.body.newPassword)
        res.json({success:"Password changed successfully"});
    }else{//As the newpassword is hashed its not possible for mongoose validation to validate its length so its done manually and returns a similar error message as the handle error function
        res.status(400).json({error:[{type:"password",message:"Minimum password length is 8 characters.",}]});
    }
});

/*
    #Takes user ID as user and newPassword and changes that users password, returns user
*/
const changePassword = async (userID,newPassword) =>{
     //newPassword encryption using bcrypt
     const salt = await bcrypt.genSalt();
     const encryptedPassword = await bcrypt.hash(newPassword,salt);
     let user = await User.findOne({_id:userID});
     user.password = encryptedPassword;
     user.save();
     return user;
}
//Export router
module.exports = router;