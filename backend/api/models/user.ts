import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Remember to hash this in production
});

const User = mongoose.model("User", userSchema);
export default User;
