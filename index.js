import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

// Import routes
import authRoutes from "./src/routes/authRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))


app.use("/api/auth", authRoutes)




app.listen((PORT), () => {
    console.log("server running on port 3000");
    connectDB()
})