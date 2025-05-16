import { Tab, Tabs } from "@/assets/components/tabs";
import { ApplicationForm } from "./about/teams/management/mgtApplication";
import JoinForm from "@/assets/components/ads/joinClub";
import SchoolMentorshipForm from "@/assets/components/ads/mentorship";
import { ReviewForm } from "@/assets/components/ads/ReviewForm";
import { useState } from "react";
import RugbyOnboardingForm from "@/assets/components/ads/onBoarding";

const Apply:React.FC = ({}) =>{
    const [refresh, setRefresh] = useState(false);
    return (
        <div className="apply">
        <div className="space"></div> 
        {/* <Support /> */}
        <Tabs>
            <Tab label="Onboard" tabId="onBoard-tab">
                <RugbyOnboardingForm />
            </Tab>
            <Tab label="Review" tabId="ReviewForm-tab">
                <ReviewForm onNewReview={() => setRefresh(!refresh)} />
            </Tab>
            <Tab label="Players" tabId="JoinForm-tab">
                <JoinForm />        
            </Tab>
            <Tab label="Schools" tabId="SchoolForm-tab"> 
                <SchoolMentorshipForm />
            </Tab>
            <Tab label="Management" tabId="ManagementForm-tab">
                <ApplicationForm />          
            </Tab>
        </Tabs>
        </div>
    )
}
export default Apply;