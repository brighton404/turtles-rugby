import { Tab, Tabs } from "@/assets/components/tabs";
import { ApplicationForm } from "./about/teams/management/mgtApplication";
import JoinForm from "@/assets/components/ads/joinClub";
import SchoolMentorshipForm from "@/assets/components/ads/mentorship";

const Apply:React.FC = ({}) =>{
    return (
        <>
        <div className="space"></div> 
        <Tabs>
            <Tab label="Players">
                <JoinForm />        
            </Tab>
            <Tab label="Schools"> 
                <SchoolMentorshipForm />
            </Tab>
            <Tab label="Management">
                <ApplicationForm />          
            </Tab>
        </Tabs>
        </>
    )
}
export default Apply;