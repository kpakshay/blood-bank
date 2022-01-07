const Blood=require("../models/blood");
const router=require("../routes/");

exports.addblood=async(req,res,next)=>{
    const blood=new Blood({
        bloodgroup:req.body.bloodgroup,
        quantity:req.body.quantity,
        name:req.body.name,
        phone:req.body.phone
    })
    try{
        var response=await blood.save();
        res.send(response);
    }catch(err){
        res.status(400).send(err);
    }
}
exports.getblood=async(req,res,next)=>{
    var response=await Blood.find();
    res.send(response);
    console.log(response);
}