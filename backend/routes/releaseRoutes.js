import express from "express";

import {
    getReleases,
    getRelease,
    updateRelease,
    addRelease,
    deleteRelease,
} from "../controllers/releaseController.js";

const releaseRouter = express.Router();

releaseRouter.get("/", getReleases);
releaseRouter.get("/:id", getRelease);
releaseRouter.post("/", addRelease);
releaseRouter.put("/:id", updateRelease);
releaseRouter.delete("/:id", deleteRelease);

export default releaseRouter;
