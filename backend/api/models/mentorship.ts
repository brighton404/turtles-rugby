import mongoose from "mongoose";

const mentorshipSchema = new mongoose.Schema({
  schoolName: String,
  location: String,
  googleMapsLink: String,
  contactName: String,
  contactEmail: String,
  contactPhone: String,
  sessionsPerWeek: Number,
  message: String,
  appliedAt: { type: Date, default: Date.now },
});

const Mentorship = mongoose.model("Mentorship", mentorshipSchema);
export default Mentorship;
