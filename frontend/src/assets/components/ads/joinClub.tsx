import { useState } from "react";
import { joinClub } from "@/api/memberApi";

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
    <div className="layouts joinClub">
      <form onSubmit={handleSubmit} id="joinClub">
        <h4>Club Membership Form</h4>
        <div className="form-wrap">
          <div className="form-children-wrap">
            <span>Name</span>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
          </div>
          <div className="form-children-wrap">
            <span>Email</span>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
          </div>
          <div className="form-children-wrap">
            <span>Phone</span>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
            <span className="Text_T_Normal description">This is your public email, it's not advisable to use your actual email</span>
          </div>
        </div>
        <button type="submit">Join Club</button>
      </form>
    </div>
  );
};

export default JoinForm;
