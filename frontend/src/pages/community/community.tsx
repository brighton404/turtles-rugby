import Support from "@/assets/components/ads/banners";
import MembersList from "./membersList";

const community: React.FC = () => {
    return (
    <>
    This is the community page
    <div className="layouts">
        <MembersList />
    </div>
    <Support />
    </>
);
   }
   export default community;