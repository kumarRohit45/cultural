import mongoose from "mongoose";

const guideSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    star: {
      type: Number,
      default: 0,
    },
    feedbackId: {
        type: Array,
        default: []
    }
  },
  { timestamps: true }
);

const Guide = mongoose.model("Guide", guideSchema);

export default Guide;
