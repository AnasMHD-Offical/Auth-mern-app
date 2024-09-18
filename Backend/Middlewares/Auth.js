const JWT = require("jsonwebtoken")

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization']
    if(!auth){
        return res.status(401)
        .json({message:"unauthorized access , JWT token required "})
    }
    try {
        const decoded = JWT.verify(auth,process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401)
            .json({message:"unauthorised access, JWT token expired or wrong" , success: false, error})        
    }
}

module.exports = ensureAuthenticated