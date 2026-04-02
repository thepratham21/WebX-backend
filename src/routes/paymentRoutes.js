import express from "express"
import isAuth from "../middlewares/authMiddleware.js"

import { createOrder, verifyPayment } from "../controllers/paymentController.js"

const paymentRouter = express.Router();

paymentRouter.post("/create-order", isAuth, createOrder);
paymentRouter.post("/verify-payment", isAuth, verifyPayment);



export default paymentRouter