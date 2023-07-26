import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import * as url from "url";

import releaseRoutes from "./routes/releaseRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/releases/", releaseRoutes);
app.use("/api/media/", mediaRoutes);

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));
