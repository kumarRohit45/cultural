import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { addBooking, deleteBooking, getAllBooking, getBooking, updateBooking } from "../controllers/bookTrip.controller.js";

const router = express.Router();

// router method
router.post("/add/:userId", verifyToken, addBooking);
router.get("/:userId", getBooking);
router.get("/:userId", verifyToken, getAllBooking);
router.put("/update/:userId/:packageId", verifyToken, updateBooking);
router.delete("/delete/:userId/:packageId", verifyToken, deleteBooking);

export default router;
