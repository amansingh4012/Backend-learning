

const isAdminUser = (req,res,next)=> {
    if(req.userInfo.role !== "admin"){
        return res.status(403).json({
            success : false,
            message: "Access denied ! only admin can access"
        })
    }
    next();
}

module.exports = isAdminUser;