import mongoose from "mongoose";

const feedBackSchema = new mongoose.Schema(
  {
    disc: {
      type: String,
      require: true,
    },
    photo: {
        type: Array,
        default: [],
    },
  },
  { timestamps: true }
);

const FeedBack = mongoose.model("FeedBack", feedBackSchema);

export default FeedBack;
