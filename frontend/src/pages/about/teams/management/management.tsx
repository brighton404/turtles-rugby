import MemberCard from "../memberCards";
import { ManagementBanner } from "../teamBanners";
import { Members } from "./data";

const ClubManagement: React.FC = ({ }) => {

    return (
      <>
        <ManagementBanner />
        <div className="team-container">
          {Members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </>
    )
};
export default ClubManagement;