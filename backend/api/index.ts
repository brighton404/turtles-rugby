import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import memberRoutes from "./routes/memberRoutes";
import mentorshipRoutes from "./routes/mentorshipRoutes";
import managementRoutes from "./routes/managementRoutes";
import playerRoutes from "./routes/playerRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.use("/api/members", memberRoutes);
app.use("/api/mentorship", mentorshipRoutes);
app.use("/api/management", managementRoutes);
app.use("/api/players", playerRoutes);

export default app; // ✅ This is required for Vercel!
