import mongoose from "mongoose";

const favourateSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    packageId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Favourate = mongoose.model("Favourate", favourateSchema);

export default Transition;
