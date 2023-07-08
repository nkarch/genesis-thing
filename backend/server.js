import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import releaseRoutes from "./routes/releaseRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/releases/", releaseRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));
