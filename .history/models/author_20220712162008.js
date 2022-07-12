
const mongoose=require('mongoose');

const author schema=new mongoose.Schema({
    name:{
        type:string,
        required:True
    }
});
module.exports=mongoose.model('Author',auth)