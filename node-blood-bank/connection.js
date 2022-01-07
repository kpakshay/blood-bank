const mongoose=require("mongoose")
exports.connect=()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/bloodbank");
    }catch(err){
        console.log(err)
    }
    
}