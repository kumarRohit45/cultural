import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    disc: {
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
      require: true,
    },
    hotelId: {
      type: String,
      require: true,
    },
    placeId: {
      type: Array,
      require: [],
    },
    noOfBook: {
      type: Number,
      default: 0,
    },
    noOfDay: {
      type: Number,
      default: 2,
    },
    star: {
        type: Number,
        default: 0,
    },
    feedbackId: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
