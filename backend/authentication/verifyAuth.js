const jwt = require('jsonwebtoken');

/*
    # Middleware for routes to make sure they are authenitcated with a Json web token
    # If they dont have a valid JWT they are denied
    # If they have a valid token they are sent to the route and the req gets the user ID attached for use in the route.
*/
const auth = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).json({error:[{type:"Authentication",message:"Access Denied",}]});
    }else{
        try {
            const isVerified = jwt.verify(token,process.env.JWT_SECRET);
            req.user = isVerified;
            next();
        } catch (err) {
            res.status(400).json({error:[{type:"Authentication",message:"Invalid Authentication",}]});
        }
    }
}
module.exports = auth;