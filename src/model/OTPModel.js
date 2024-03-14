const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    email:{type:String, unique:true, require:true},
    otp:{type:String, require:true},
    status:{type:String, require:true}
},{timeStamp:true, versionKey:false});

const OTPModel = mongoose.model('users', DatabaseSchema)

module.exports = OTPModel;