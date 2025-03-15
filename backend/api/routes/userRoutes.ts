import express from "express";
import User from "../models/user"

const router = express.Router();

// Create User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Users
router.get("/", async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
