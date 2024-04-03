import express from "express";
import { googlePartner, googleUser, signin, signupPartner, signupUser } from "../controllers/auth.controller.js";

const router = express.Router();

// router method
router.post("/signin", signin);
router.post("/signup-user", signupUser);
router.post("/signup-partner", signupPartner);
router.post("/google-user", googleUser);
router.post("/google-partner", googlePartner);

export default router;
