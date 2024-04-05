import express from "express"
import { verifyToken } from "../utils/verifyUser.js";
import { addHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel.route.js";

const router = express.Router()

// router method

router.post("/add/:userId", verifyToken, addHotel);
router.get("/:address", getHotel);
router.get("/:userId", verifyToken, getAllHotels);
router.put("/update/:userId/:hotelId", verifyToken, updateHotel);
router.delete("/delete/:userId/:hotelId", verifyToken, deleteHotel);

export default router;