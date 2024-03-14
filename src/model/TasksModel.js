const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate:{type:Date},
},{timeStamp:true,versionKey:false});

const TasksModel = mongoose.model('tasks', DatabaseSchema)

module.exports = TasksModel;