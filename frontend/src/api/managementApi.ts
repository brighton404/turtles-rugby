import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/management";

/* name, surname, position, imageUrl */
export const manageClub = async (name: string, surname: string, position: string, imageUrl: string) => {
  return await axios.post(API_URL + "/join", { name, surname, position, imageUrl });
};

export const getManagement = async () => {
  return await axios.get(API_URL);
};
