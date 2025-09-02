const jwt  = require('jsonwebtoken')

const authMiddleware = (req,res, next)=> {
    const authHeader = req.headers["authorization"];
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1]
if(!token){
    return res.status(401).json({
        success : false,
        message : " access denied no token provided."
    })
}

// decode the token 
try {

    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedTokenInfo);
    
     req.userInfo = decodedTokenInfo;
    
} catch (error) {
    return  res.status(500).json({
        success : false,
        message : " access denied no token provided."
    })
    
}

    next();
}

module.exports = authMiddleware;