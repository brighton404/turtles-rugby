import { AddCalendar } from "@/assets/components/ads/banners";
import "@/pages/events/lib/ecal";
import Calendar from "./calendar";
import { Layout5 } from "@/assets/components/layouts";
const events: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <AddCalendar />
    <Layout5 />
    <div className="column layouts calendarWrap m-layouts ">
        <Calendar />
    </div>
    </>
    );
   }
   export default events;