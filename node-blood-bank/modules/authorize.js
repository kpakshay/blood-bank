const jwt = require("jsonwebtoken");

exports.AuthorizeUser = async (req,res,next) => {
    // Check whether access token exists
    if(!req.headers['access-token']) 
        return res.status(401).send({msg : "Unauthorised"})
    
    // Verify token
    try{
        req.body.user = await jwt.verify(req.headers['access-token'], "SWERA");
        next();
    } catch(err) {
        res.send(err)
    }
}

// exports.isAdmin = async (req,res,next) => {
//     req.body.user.role === "Admin" ? next() : res.status(401).send({msg : "You are not Admin"})   
// }