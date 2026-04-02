import express from "express"
import { googleAuth, logout } from "../controllers/authController.js"
import { signup } from "../controllers/authController.js";
import { login } from "../controllers/authController.js";



const authRouter = express.Router()

authRouter.post("/google", googleAuth)
authRouter.post("/signup", signup)
authRouter.get("/logout", logout )
authRouter.post("/login", login)

export default authRouter