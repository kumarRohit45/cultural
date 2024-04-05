import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema(
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
    pinCode: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    noOfPerson: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

export default UserDetail;
