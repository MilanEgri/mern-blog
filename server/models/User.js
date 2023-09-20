const mongoose = require('mongoose');

const {Schema,model} = mongoose;


const UserShhema = new Schema({
    name : {type:String ,required:true,min:4,unique:true},
    password : {type:String ,required:true},
})

const UserModel =model('User',UserShhema)

module.exports = UserModel;