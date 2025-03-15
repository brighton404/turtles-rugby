import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/users";

export const registerUser = async (name: string, email: string, password: string) => {
  return await axios.post(API_URL + "/register", { name, email, password });
};

export const getUsers = async () => {
  return await axios.get(API_URL);
};
