import mongoose from "mongoose";

const bookTripSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    packageId: {
      type: String,
      require: true,
    },
    status: {
        type: String,
        require: true,
    },
  },
  { timestamps: true }
);

const BookTrip = mongoose.model("BookTrip", bookTripSchema);

export default BookTrip;
