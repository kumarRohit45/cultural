import express from "express"
import { verifyToken } from "../utils/verifyUser.js";
import { addPlace, deletePlace, getAllPlaces, getPlace, updatePlace } from "../controllers/place.controller.js";

const router = express.Router()

// router method

router.post("/add/:userId", verifyToken, addPlace);
router.get("/:address", getPlace);
router.get("/:userId", verifyToken, getAllPlaces);
router.put("/update/:userId/:placeId", verifyToken, updatePlace);
router.delete("/delete/:userId/:placeId", verifyToken, deletePlace);

export default router;
