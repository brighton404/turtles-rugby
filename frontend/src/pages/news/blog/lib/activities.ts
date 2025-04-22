/* // src/data/activities.ts

export const activities = [
    {
      type: "Sent",
      amount: "- 500.00 IDR",
      method: "Credit Card **** 6969",
      person: "Raihan Zuhilmin",
      avatar: "https://i.pravatar.cc/150?img=1",
      date: "Aug 28, 2023 3:40 PM",
      status: "",
    },
    {
      type: "Received",
      amount: "+ 2.500 IDR",
      method: "PayPal @claristajd",
      person: "Clarista Jawl",
      avatar: "https://i.pravatar.cc/150?img=2",
      date: "Aug 28, 2023 3:35 PM",
      status: "",
    },
    {
      type: "Converted",
      amount: "400.00 USD",
      method: "Debit Card **** 2383",
      person: "Bagus Fikri",
      avatar: "https://i.pravatar.cc/150?img=3",
      date: "Aug 27, 2023 3:35 PM",
      status: "Failed",
    },
    {
      type: "Received",
      amount: "+ 1.000 IDR",
      method: "PayPal @basilkelvin",
      person: "Basilus Kelvin",
      avatar: "https://i.pravatar.cc/150?img=4",
      date: "Aug 27, 2023 11:10 AM",
      status: "Success",
    },
  ]; */

import { supabase } from "@/utils/supabase";

  export async function activities() {
    const { data, error } = await supabase.from('TurtleNews').select('*');
  
    if (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  
    return data;
    
  }
  