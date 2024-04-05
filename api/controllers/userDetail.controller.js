import UserDetail from "../models/userDetail.model.js";
import { errorHandler } from "../utils/error.js";

export const adduserDetails = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(400, "You are not allowed to add this users details.")
    );
  }
  try {
    const { name, address, pinCode, state, email, phoneNumber, noOfPerson } =
      req.body;

    const newUserDetails = new UserDetail({
      userId: req.params.userId,
      name,
      address,
      pinCode,
      state,
      email,
      phoneNumber,
      noOfPerson,
    });

    await newUserDetails.save();
    res.status(200).json({ message: "User details added successfully." });
  } catch (error) {
    return next(error);
  }
};

export const getuserDetails = async (req, res, next) => {
  if (
    !req.user.isAdmin ||
    !req.user.isPartner ||
    req.user.id !== req.params.userId
  ) {
    return next(
      errorHandler(403, "You are not allowed to get this users details.")
    );
  }
  try {
    const userDetails = await .UserDetail.find({ userId: req.params.userId });
    res.status(200).json(userDetails);
  } catch (error) {
    return next(error);
  }
};

export const getAllUserDetails = async (req, res, next) => {
  if (!req.user.isAdmin || !req.user.isPartner) {
    return next(
      errorHandler(403, "You are not allowed to get all users details.")
    );
  }
  try {
    if (req.user.isAdmin) {
      const userDetails = await UserDetail.find();
      res.status(200).json(userDetails);
    }
    else if (req.user.isPartner) {
        const userDetails = await UserDetail.find({ userId: req.params.id });
        res.status(200).json(userDetails);
    }
  } catch (error) {
    return next(error);
  }
};

export const updateuserDetails = async (req, res, next) => {
    if(req.user.id !== req.params.userId) {
        return next(
            errorHandler(400, "You are not allowed to update this users details.")
        );
    }
    try {
        const { name, address, pinCode, state, email, phoneNumber, noOfPerson } = req.body;
        const updateUserDetails = await UserDetail.findByIdAndUpdate(req.params.userDetailsId, {
            name,
            address,
            pinCode,
            state,
            email,
            phoneNumber,
            noOfPerson,
        });
        await updateUserDetails.save();
  
        res.status(200).json({ message: "User details updated successfully." });
    } catch (error) {
        return next(error)
    }
};

export const deleteuserDetails = async (req, res, next) => {
    if(req.user.id !== req.params.userId) {
        return next(
            errorHandler(400, "You are not allowed to delete this users details.")
        );
    }
    try {
        const deleteUserDetails = await UserDetail.findByIdAndDelete(req.params.userDetailsId);
        res.status(200).json({ message: "User details deleted successfully." });
    } catch (error) {
        return next(error)
    }
};
