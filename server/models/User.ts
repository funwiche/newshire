import mongoose from "mongoose";
export default mongoose.model(
  "User",
  new mongoose.Schema(
    {
      _id: { type: Number, required: true },
      email: { type: String, index: true, required: true, unique: true },
      password: String,
      profile: Map,
      program: Map,
      address: Map,
      language: Map,
      higher: {},
      secondary: Map,
      uploads: Map,
      verified: Boolean,
      status: String,
    },
    { versionKey: false, timestamps: true }
  )
);
