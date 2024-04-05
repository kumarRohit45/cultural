import mongoose from "mongoose";

const customTripSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    cabId: {
      type: String,
    },
    hotelId: {
      type: String,
    },
    placeId: {
      type: Array,
    },
    noOfDay: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);

const CustomTrip = mongoose.model("CustomTrip", customTripSchema);

export default CustomTrip;
