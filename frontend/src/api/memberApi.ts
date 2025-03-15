import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/members";

export const joinClub = async (name: string, email: string, phone: string) => {
  return await axios.post(API_URL + "/join", { name, email, phone });
};

export const getMembers = async () => {
  return await axios.get(API_URL);
};
