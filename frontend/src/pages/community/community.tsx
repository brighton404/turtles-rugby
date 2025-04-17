import {JoinMembers} from "@/assets/components/ads/banners";
import MembersList from "./membersList";

const community: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <JoinMembers />
    <div className="layouts">
        <MembersList />
    </div>
    </>
);
   }
   export default community;