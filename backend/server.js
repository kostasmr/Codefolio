import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
const port = 8080;

connectDB();

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});
