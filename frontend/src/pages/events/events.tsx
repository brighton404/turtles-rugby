import { AddCalendar } from "@/assets/components/ads/banners";
import Calendar from "./calendar";
import { Layout5 } from "@/assets/components/layouts";
import { Tabs, Tab } from "@/assets/components/tabs";
import CompiledEvents from "./lib/compiledCards";

const events: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <AddCalendar />
    <Layout5 />
    <Tabs>
        <Tab label="Cards" tabId="CardEvents-tab">
            <div className="tab-events-wrap">
                <CompiledEvents />
            </div>          
        </Tab>
        <Tab label="Calendar" tabId="CalendarEvents-tab">
            <div className="tab-calendar-wrap">
                <Calendar />
            </div>          
        </Tab>
      </Tabs>
    </>
    );
   }
   export default events;