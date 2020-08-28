const jwt = require('jsonwebtoken')





module.exports = function(req,res,next){

    //Get token from the header
    const token = req.header('x-auth-token');

    //check if not token

    if(!req.session.isLoggedIn){
        return res.redirect('/login')
    }

    //verify token
    try {
        // const decoded = jwt.verify(token,sails.config.jwtSecret)
        // req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({"msg":"Invalid authoriaion"})
    }

}