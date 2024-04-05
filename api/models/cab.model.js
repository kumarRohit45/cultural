import mongoose from "mongoose";

const cabSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    cabName: {
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
    isAvailable: {
        type: Boolean,
        default: true,
    },
    noOfTrip: {
        type: Number,
        default: 0,
    },
    star: {
        type: Number,
        default: 0,
    },
    cabImage: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1569433295058-aaa6338e25c4?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  },
  { timestamps: true }
);

const Cab = mongoose.model("Cab", cabSchema);

export default Cab;
