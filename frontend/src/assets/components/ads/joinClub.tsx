import { useState } from "react";
import { joinClub } from "@/api/memberApi";
import { JoinPlayers } from "./banners";

const JoinForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await joinClub(name, email, phone);
      alert("Successfully joined the club!");
    } catch (error) {
      console.error("Error joining club:", error);
    }
  };

  return (
    <>
    <JoinPlayers/>
    <div className="layouts joinClub">
      <form onSubmit={handleSubmit} id="joinClub">
      <h2>Club Membership Form</h2>
        <span className="Text_S_Normal truncate description">
           Please fill out the form with your actual legal Information.
        </span> 
        <div className="form-wrap">
          <div className="form-children-wrap">
            <span>Name</span>
            <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />            
          </div>
          <div className="form-children-wrap">
            <span>Email</span>
            <span className="Text_T_Normal description">This is your public mail. Club Information would be passed via the provided mail.</span>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />            
          </div>
          <div className="form-children-wrap">
            <span>Phone</span>
            <span className="Text_T_Normal description">This is your public number, it's not advisable to use your actual number</span>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />            
          </div>
        </div>
        <button type="submit">Join Club</button>
      </form>
    </div>
    </>
  );
};

export default JoinForm;
