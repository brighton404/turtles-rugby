import { useEffect, useState } from "react";

const MembersList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div>
      <h2>Club Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member._id}>{member.name} - {member.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
