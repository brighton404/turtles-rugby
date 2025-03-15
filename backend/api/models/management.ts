import mongoose from "mongoose";

const managementSchema = new mongoose.Schema({
  name: String,
  surname: String,
  position: String,
  imageUrl: String,
  joinedAt: { type: Date, default: Date.now },
});

const Member = mongoose.model("Management", managementSchema);
export default Member;
