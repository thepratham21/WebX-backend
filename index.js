import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.listen((PORT), () => {
    console.log("server running on port 3000");
    connectDB()
})