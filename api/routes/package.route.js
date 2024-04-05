import express from "express"
import { verifyToken } from "../utils/verifyUser.js";
import { addPackage, deletePackage, getAllPackage, getPackage, updatePackage } from "../controllers/package.controller.js";

const router = express.Router()

// router method

router.post("/add/:userId", verifyToken, addPackage);
router.get("/:packageId", getPackage);
router.get("/", verifyToken, getAllPackage);
router.put("/update/:packageId", verifyToken, updatePackage);
router.delete("/delete/:packageId", verifyToken, deletePackage);

export default router;