import express from "express"
import isAuth from "../middlewares/authMiddleware.js"
import { getCurrentUser } from "../controllers/userControllers.js"
import { genrateWebsite } from "../controllers/websiteController.js"


const websiteRouter = express.Router()

websiteRouter.post("/genrate",isAuth ,genrateWebsite)

export default websiteRouter