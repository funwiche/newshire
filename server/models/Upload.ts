import mongoose from "mongoose";
export default mongoose.model(
  "Upload",
  new mongoose.Schema(
    {
      _id: { type: String, required: true },
      user: Number,
      data: Buffer,
      field: String,
      type: String,
    },
    { versionKey: false, timestamps: false }
  )
);
