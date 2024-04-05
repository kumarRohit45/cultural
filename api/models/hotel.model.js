import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    HotelName: {
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
    noOfRoom: {
        type: Number,
        default: 5,
    },
    noOfRoomBooked: {
        type: Number,
        default: 0,
    },
    star: {
        type: Number,
        default: 0,
    },
    HotelImage: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1584132869994-873f9363a562?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
