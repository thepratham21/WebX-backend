import 'dotenv/config';
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

// Import routes
import authRoutes from "./src/routes/authRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import websiteRoutes from "./src/routes/websiteRoutes.js"
import paymentRoutes from "./src/routes/paymentRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))


app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/website", websiteRoutes)
app.use("/api/payment", paymentRoutes)






app.listen((PORT), () => {
    console.log("server running on port 3000");
    connectDB()
})