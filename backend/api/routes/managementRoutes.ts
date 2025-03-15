import express from "express";
import management from "../models/management";

const router = express.Router();

// Add a new management
router.post("/join", async (req, res) => {
  try {
    const { name, surname, position, imageUrl } = req.body;
    const newManagement = new management({ name, surname, position, imageUrl  });
    await newManagement.save();
    res.status(201).json({ message: "Successfully joined the club!", management: newManagement });
  } catch (error) {
    res.status(500).json({ error: "Error adding management" });
  }
});

// Get all managements
router.get("/", async (_req, res) => {
  const managements = await management.find();
  res.json(managements);
});

export default router;
