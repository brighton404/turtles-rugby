import { useState } from "react";
import { managePlayers } from "@/api/playerAPi";

const ClubPlayers = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState(Number);
  const [imageUrl, setImageUrl] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await managePlayers(name, surname, position, imageUrl, age, weight);
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
            <span>Surname</span>
            <input type="email" placeholder="Email" onChange={(e) => setSurname(e.target.value)} />
            <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
          </div>
          <div className="form-children-wrap">
            <span>Position</span>
            <input type="text" placeholder="Phone" onChange={(e) => setPosition(e.target.value)} required />
            <span className="Text_T_Normal description">This is your public email, it's not advisable to use your actual email</span>
          </div>
          <div className="form-children-wrap">
            <span>Age</span>
            <input type="number" placeholder="Phone" onChange={(e) => setAge(e.target.valueAsNumber)} required />
            <span className="Text_T_Normal description">This is your public email, it's not advisable to use your actual email</span>
          </div>
          <div className="form-children-wrap">
            <span>Weight</span>
            <input type="text" placeholder="Phone" onChange={(e) => setWeight(e.target.value)} required />
            <span className="Text_T_Normal description">This is your public email, it's not advisable to use your actual email</span>
          </div>
          <div className="form-children-wrap">
            <span>Image Link</span>
            <input type="text" placeholder="Phone" onChange={(e) => setImageUrl(e.target.value)} required />
            <span className="Text_T_Normal description">This is your public email, it's not advisable to use your actual email</span>
          </div>
        </div>
        <button type="submit">Join Club</button>
      </form>
    </div>
  );
};

export default ClubPlayers;
