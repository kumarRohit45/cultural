import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    placeName: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    star: {
        type: Number,
        default: 0,
    },
    placeImage: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);

export default Place;
