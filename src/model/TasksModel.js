const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    title:{type:String, unique:true, require:true},
    description:{type:String, require:true},
    status:{type:String, require:true},
},{timeStamp:true,versionKey:false});

const UsersMOdel = mongoose.model('users', DatabaseSchema)

module.exports = UsersMOdel;