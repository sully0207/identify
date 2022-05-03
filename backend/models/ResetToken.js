const mongoose = require("mongoose");

const ResetTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

ResetTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });


module.exports = mongoose.model('ResetToken',ResetTokenSchema );
