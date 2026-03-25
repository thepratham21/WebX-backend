import jwt from "jsonwebtoken"
import User from "../models/user.js"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if(!token){
            return res.status(400).json({message: "Authentication failed: Invalid token"})
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id)
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export default isAuth