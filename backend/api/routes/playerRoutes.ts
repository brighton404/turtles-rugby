import express from "express";
import Player from "../models/players";

const router = express.Router();

// Add a new player
router.post("/join", async (req, res) => {
  try {
    const { name, surname, position, imageUrl, age, weight } = req.body;
    const newplayer = new Player({ name, surname, position, imageUrl, age, weight });
    await newplayer.save();
    res.status(201).json({ message: "Successfully joined the club!", player: newplayer });
  } catch (error) {
    res.status(500).json({ error: "Error adding player" });
  }
});

// Get all players
router.get("/", async (_req, res) => {
  const players = await Player.find();
  res.json(players);
});

export default router;
