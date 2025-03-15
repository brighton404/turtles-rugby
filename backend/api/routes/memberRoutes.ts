import express from "express";
import Member from "../models/member";

const router = express.Router();

// Add a new member
router.post("/join", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newMember = new Member({ name, email, phone });
    await newMember.save();
    res.status(201).json({ message: "Successfully joined the club!", member: newMember });
  } catch (error) {
    res.status(500).json({ error: "Error adding member" });
  }
});

// Get all members
router.get("/", async (_req, res) => {
  const members = await Member.find();
  res.json(members);
});

export default router;
