
const mongoose=require("mongoose");

const regSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const Register=new mongoose.model("Register",regSchema);
module.exports=Register;