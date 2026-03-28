import express from "express"
import isAuth from "../middlewares/authMiddleware.js"
import { getCurrentUser } from "../controllers/userControllers.js"
import { changes, genrateWebsite, getAll, getWebsiteById } from "../controllers/websiteController.js"
import Website from "../models/website.js"


const websiteRouter = express.Router()

websiteRouter.post("/genrate",isAuth ,genrateWebsite)
websiteRouter.post("/update/:id",isAuth , changes)
websiteRouter.get("/id/:id",isAuth ,getWebsiteById)
websiteRouter.get("/all",isAuth ,getAll)

export default websiteRouter