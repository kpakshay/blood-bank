const mongoose=require("mongoose")
exports.connect=()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/bloodbank");
    }catch(err){
        console.log(err)
    }
    
}

// mongodb+srv://Akshay:Akshay@cluster0.u7akf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority