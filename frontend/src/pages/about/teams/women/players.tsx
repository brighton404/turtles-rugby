import TeamMemberCard from "../card";
import { teamMembers } from "../women/data";
import { WomenBanner } from "../teamBanners";

const snrWomen: React.FC = ({ }) => {

    return (
      <>
      <div className="space"></div>
        <WomenBanner />
        <div className="team-container">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </>
    )
};
export default snrWomen;