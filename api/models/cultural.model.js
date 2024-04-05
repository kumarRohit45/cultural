import mongoose from "mongoose";

const culturalTripSchema = new mongoose.Schema(
  {
    packageId: {
      type: String,
      require: true,
    },
    date: {
        type: Array,
        require: true,
    },
  },
  { timestamps: true }
);

const CulturalTrip = mongoose.model("CulturalTrip", culturalTripSchema);

export default CulturalTrip;
