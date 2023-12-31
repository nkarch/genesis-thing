import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
    getReleases,
    getReleaseById,
    getReleaseBySlug,
    updateRelease,
    addRelease,
    deleteRelease,
    deleteReleases,
} from "../controllers/releaseController.js";

const releaseRouter = express.Router();

releaseRouter.get("/", getReleases);
releaseRouter.get("/:slug", getReleaseBySlug);
releaseRouter.post("/", addRelease);
releaseRouter.put("/:id", updateRelease);
releaseRouter.route("/id").delete(protect, deleteRelease);
releaseRouter.route("/").delete(protect, deleteReleases);

export default releaseRouter;
