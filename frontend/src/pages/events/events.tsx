import { AddCalendar } from "@/assets/components/ads/banners";
import "@/pages/events/lib/ecal";
import Calendar from "./calendar";
const events: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <AddCalendar />
    <div className="column layouts calendarWrap m-layouts ">
        <Calendar />
    </div>
    </>
    );
   }
   export default events;