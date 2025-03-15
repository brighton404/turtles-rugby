import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/members";

export const managePlayers = async (name: string, surname: string, position: string, imageUrl: string, age: number, weight: string) => {
  return await axios.post(API_URL + "/join", { name, surname, position, imageUrl, age, weight });
};

export const getPlayers = async () => {
  return await axios.get(API_URL);
};
