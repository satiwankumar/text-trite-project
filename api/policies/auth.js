const jwt = require('jsonwebtoken')



module.exports = function(req,res,next){

    //Get token from the header
    const token = req.header('x-auth-token');

    //check if not token

    if(!token){
        return res.status(401).json({msg : 'No token authorization denied'})
    }

    //verify token
    try {
        const decoded = jwt.verify(token,sails.config.jwtSecret)
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({"msg":"token is invalid"})
    }

}