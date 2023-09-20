const mongoose = require('mongoose');

const {Schema,model} = mongoose;


const PostShhema = new Schema({
    title : {type:String ,required:true},
    summary : {type:String ,required:true},
    content : {type:String ,required:true},
    summary : {type:String ,required:true},
    isMain : {type:Boolean ,required:true},
    isSport : {type:Boolean ,required:true},
    isGastro : {type:Boolean ,required:true},
    isGaming : {type:Boolean ,required:true},
    isFinance : {type:Boolean ,required:true},
    file : {type:String ,required:true},

},{
    timestamps: true,
})

const PostModel =model('Post',PostShhema)

module.exports = PostModel;