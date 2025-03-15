import { useEffect, useState } from "react";
import { manageClub } from "@/api/managementApi";

const ClubManagement = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");
  const [imageUrl, setimage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await manageClub(name, surname, position, imageUrl);
      alert("Successfully joined the club!");
    } catch (error) {
      console.error("Error joining club:", error);
    }
  };

    const [management, setManagment] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/api/management")
        .then((res) => res.json())
        .then((data) => setManagment(data));
    }, []);

  return (
    <div className="layouts row bcknd">
      <div className="bcndlist">
        <h2>Management list</h2>
        {management.map((management) => (
          <div className="bcndItemList" key={management._id}>
            <img src={management.imageUrl} alt={management.name} />
            <span>Name:</span>
            <span className="Text_Normal bold FirstLettercase">{management.name} {management.surname}</span>
            <span>Position:</span>
            <span className="Text_Normal bold FirstLettercase">{management.position}</span>
          </div>
        ))}
      </div>
      <div className="bcndform">
        <form onSubmit={handleSubmit} id="joinClub">
          <h4>Add Manager</h4>
          <div className="form-wrap">
            <div className="form-children-wrap">
              <span>Name</span>
              <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
              <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
            </div>
            <div className="form-children-wrap">
              <span>Surname</span>
              <input type="text" placeholder="surname" onChange={(e) => setSurname(e.target.value)} />
              <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
            </div>
            <div className="form-children-wrap">
              <span>Position</span>
              <input type="text" placeholder="position" onChange={(e) => setPosition(e.target.value)} required />
              <span className="Text_T_Normal description">This is your position in the club, you cannot claim a position already taken</span>
            </div>
            <div className="form-children-wrap">
              <span>Image Link</span>
              <input type="url" placeholder="link" onChange={(e) => setimage(e.target.value)} required />
              <span className="Text_T_Normal description">This is your a link to where you have saved your image.</span>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ClubManagement;
