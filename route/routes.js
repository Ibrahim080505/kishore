import { Signup }  from "../Controller/controller.js";

import express from "express";
const router = express.Router();
router.post("/signUp",Signup);

export default router;