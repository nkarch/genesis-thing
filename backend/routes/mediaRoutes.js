import express from "express";

import { getMedia, getMediaById } from "../controllers/mediaController.js";

const mediaRouter = express.Router();

mediaRouter.get("/", getMedia);
mediaRouter.get("/:mediaId", getMediaById);

export default mediaRouter;
