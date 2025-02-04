import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from "./config/db.js";
connectDB();

// import all the routes
import profileRoutes from "./components/profile/profile.routes.js";
// const education = require('./components/education')
// const projects = require('./components/projects')
// const experience = require('./components/experience')
// const certifications = require('./components/certifications')
// const skills = require('./components/skills')
// const cvs = require('./components/cvs')

const app = express();
app.use(express.json()); // allow us to accept JSON data in the req.body

app.use("/api/profile", profileRoutes);
// app.use("/api/education", education);
// app.use("/api/projects", projects);
// app.use("/api/experience", experience);
// app.use("/api/certifications", certifications);
// app.use("/api/skills", skills);
// app.use("/api/cvs", cvs);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});
