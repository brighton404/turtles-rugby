/* import CalendarComponent from "./lib/calendar"; */
import AddCalendar from "@/assets/components/ads/addCalendar";
import "@/pages/events/lib/ecal";
import IframeResizer from '@iframe-resizer/react'
/* import CalendarComponent from "./lib/calendar"; */
const events: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <AddCalendar />
    {/* <iframe src="" title="Styled Calendar" ></iframe> */}
    <IframeResizer src={"https://embed.styledcalendar.com/#mL8WOt2geOQvgMwlgudx"} className={"styled-calendar-container"}   style={{ border: 'none' }} data-cy={"calendar-embed-iframe"} license={"GPLv3"}/>
    
    {/* <div className="layouts"><CalendarComponent /></div>  */}
    </>
    );
   }
   export default events;