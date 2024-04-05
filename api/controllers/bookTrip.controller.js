import BookTrip from "../models/bookTrip.model.js";
import { errorHandler } from "../utils/error.js";

export const addBooking = async (req, res, next) => {
  const { packageId } = req.body.package;
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to add Booking."));
  }
  try {
    const user = new BookTrip({
      userId: req.params.userId,
      packageId: packageId,
      status: req.body.status,
    });
  } catch (error) {
    return next(error);
  }
};

export const getBooking = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(400, "You are not allowed to update this users details.")
    );
  }

  try {
    const bookings = await BookTrip.find({ userId: req.params.userId });
    res.status(200).json(bookings);
  } catch (error) {
    return next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(400, "You are not allowed to delete this users details.")
    );
  }
  try {
    const booking = await BookTrip.findByIdAndDelete(req.params.bookingId);

    res.status(200).json({ message: "User details deleted successfully." });
  } catch (error) {
    return next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(400, "You are not allowed to update this users details.")
    );
  }
  try {
    const booking = await BookTrip.findByIdAndUpdate(
      req.params.bookingId,
      {
        status: req.body.status,
        packageId: req.params.packageId,
        userId: req.params.userId,
      },
      { new: true }
    );
    res.status(200).json(booking);
  } catch (error) {
    return next(error);
  }
};

export const getAllBooking = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      errorHandler(400, "You are not Allowed to get All Available Bookings")
    );
  }

  try {
    const bookings = await BookTrip.find();
    res.status(200).json(bookings);
  } catch (error) {
    return next(error);
  }
};
