import express from "express"
import { verifyToken } from "../utils/verifyUser.js";
import { adduserDetails, deleteuserDetails, getAllUserDetails, getuserDetails, updateuserDetails } from "../controllers/userDetail.controller.js";

const router = express.Router()

// router method

router.post("/add/:userId", verifyToken, adduserDetails);
router.get("/:userId", verifyToken, getuserDetails);
router.get("/:userId", verifyToken, getAllUserDetails);
router.put("/update/:userId/:userDetailsId", verifyToken, updateuserDetails);
router.delete("/delete/:userId/:userDetailsId", verifyToken, deleteuserDetails);

export default router;
