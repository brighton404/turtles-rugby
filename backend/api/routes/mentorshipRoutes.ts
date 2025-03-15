import express from "express";
import Mentorship from "../models/mentorship";

const router = express.Router();

// Submit school mentorship application
router.post("/apply", async (req, res) => {
  try {
    const { schoolName, location, googleMapsLink, contactName, contactEmail, contactPhone, sessionsPerWeek, message } = req.body;
    const newApplication = new Mentorship({
      schoolName,
      location,
      googleMapsLink,
      contactName,
      contactEmail,
      contactPhone,
      sessionsPerWeek,
      message,
    });
    await newApplication.save();
    res.status(201).json({ message: "Application submitted!", application: newApplication });
  } catch (error) {
    res.status(500).json({ error: "Error submitting application" });
  }
});

// Get all mentorship applications
router.get("/", async (_req, res) => {
  const applications = await Mentorship.find();
  res.json(applications);
});

export default router;
