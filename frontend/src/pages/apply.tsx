import { Tab, Tabs } from "@/assets/components/tabs";
import { ApplicationForm } from "./about/teams/management/mgtApplication";
import JoinForm from "@/assets/components/ads/joinClub";
import SchoolMentorshipForm from "@/assets/components/ads/mentorship";
import { ReviewForm } from "@/assets/components/ads/ReviewForm";
import { useState } from "react";

const Apply:React.FC = ({}) =>{
    const [refresh, setRefresh] = useState(false);
    return (
        <>
        <div className="space"></div> 
        <Tabs>
            <Tab label="Review">
                <ReviewForm onNewReview={() => setRefresh(!refresh)} />
            </Tab>
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