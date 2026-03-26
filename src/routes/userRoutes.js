import express from "express"
import isAuth from "../middlewares/authMiddleware.js"
import { getCurrentUser } from "../controllers/userControllers.js"


const userRouter = express.Router()

userRouter.get("/me",isAuth ,getCurrentUser)



export default userRouter