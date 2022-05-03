//Package imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); 
const path = require("path");
const multer = require('multer')
//Route imports
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const scanItemRoute = require("./routes/scanItem");
//Initialisations
const app = express();
const port = process.env.PORT || 8001;
const publicDir = path.join(__dirname,'public');

//App middleware and init
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicDir));
app.set('view engine','ejs');

//Route Middlewares
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/scanItem',scanItemRoute);
//app.use('/admin',adminRoute); //WILL NOT BE IN USE IN PRODUCTION APPLICATION - KEEP COMMENTED OUT

//Database Setup
const URI = process.env.MONGODB_URI;
mongoose.connect(URI);
const connection = mongoose.connection;

//On mongodb start error
connection.on("error",(error)=>{
    console.log("MongoDB connection error:",error);
    mongoose.disconnect();
});
//On mongodb start
connection.once("open",()=>{
    console.log("Connected to MongoDB successfully");
});

//Start Server
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});