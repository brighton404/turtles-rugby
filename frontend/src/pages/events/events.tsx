/* import { AddCalendar } from "@/assets/components/ads/banners"; */
/* import { Tabs, Tab } from "@/assets/components/tabs"; */
import Calendar from "./calendar";
import CompiledEvents from "./lib/compiledCards";
import EventBanner from "./lib/newEvent";

const events: React.FC = () => {
    return (
    <section className="eventsPage">
        <div className="space"></div>
        <div className="tab-newEvent-wrap">
            <EventBanner />
        </div>
        <section className="tab-events-wrap">
            <CompiledEvents /> 
        </section>          
        <section className="tab-calendar-wrap">
            <Calendar />
        </section> 
    </section>
    );
   }
   export default events;