import mongoose from "mongoose";

const transitionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    serviceId: {
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

const Transition = mongoose.model("Transition", transitionSchema);

export default Transition;
