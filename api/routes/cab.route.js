import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { addCab, deleteCab, getAllCabs, getCab, updateCab } from "../controllers/cab.controller.js";

const router = express.Router();

// router method
router.post("/add/:userId", verifyToken, addCab);
router.get("/:address", getCab);
router.get("/:userId", verifyToken, getAllCabs);
router.put("/update/:userId/:cabId", verifyToken, updateCab);
router.delete("/delete/:userId/:cabId", verifyToken, deleteCab);

export default router;
