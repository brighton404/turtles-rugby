import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: String,
  surname: String,
  position: String,
  imageUrl: String,
  age: Number,
  weight: String,
  joinedAt: { type: Date, default: Date.now },
});

const Member = mongoose.model("Player", playerSchema);
export default Member;
