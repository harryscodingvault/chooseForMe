import express from "express";
const router = express.Router();

import { getCount, addCount } from "../controllers/counterController";

router.route("/").get(getCount).post(addCount);

export default router;
