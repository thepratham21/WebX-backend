import express from "express"
import { googleAuth, logout } from "../controllers/authController.js"
import isAuth from "../middlewares/authMiddleware.js"

const authRouter = express.Router()

authRouter.post("/google", googleAuth)
authRouter.get("/logout", logout )

export default authRouter