import TeamMemberCard from "../card";
import { teamMembers } from "./data";
import { MenBanner } from "../teamBanners";

const snrMen: React.FC = ({ }) => {

    return (
        <>
          <MenBanner />
          <div className="team-container">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
          </div>
        </>
    );
};
export default snrMen;
