import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/mentorship";

export const applyForMentorship = async (schoolName: string, location: string, googleMapsLink: string, contactName: string, contactEmail: string, contactPhone: string, sessionsPerWeek: number, message: string) => {
  return await axios.post(API_URL + "/apply", { schoolName, location, googleMapsLink, contactName, contactEmail, contactPhone, sessionsPerWeek, message });
};

export const getApplications = async () => {
  return await axios.get(API_URL);
};
