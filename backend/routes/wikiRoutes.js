import express from "express";

import { getDiscographyWiki } from "../controllers/wikiController.js";

const wikiMediaRouter = express.Router();

wikiMediaRouter.get("/discography", getDiscographyWiki);

export default wikiMediaRouter;
