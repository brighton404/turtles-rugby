import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/management";

/* name, surname, position, imageUrl */
export const manageClub = async (name: string, surname: string, position: string, imageUrl: string) => {
  return await axios.post(API_URL + "/join", { name, surname, position, imageUrl });
};

export const getManagement = async () => {
  return await axios.get(API_URL);
};

/* 
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/welcome' };

export async function middleware() {
  const greeting = await get('greeting');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  return NextResponse.json(greeting);
}
 */