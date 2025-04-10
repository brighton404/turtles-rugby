import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction";
import { supabase } from "@/utils/supabase";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { EventApi } from "@fullcalendar/core";
import './events.css';
import "tippy.js/dist/tippy.css";
import tippy from "tippy.js";


const Calendar = () => { 
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("TurtleEvents").select("*");
    
      if (error) {
        console.error("Error fetching events:", error);
        return;
      }
    
      const formattedEvents = data.map((event) => {
        /* console.log("Checking event:", event); */
    
        // Ensure start & end are valid dates
        if (!event.start || !event.end || isNaN(new Date(event.start).getTime())) {
          console.warn("Invalid date found:", event);
          return null; // Skip invalid events
        }
    
        return {
          id: String(event.id), // Ensure ID is a string
          title: event.title,
          start: new Date(event.start).toISOString(), // Convert to ISO format
          end: new Date(event.end).toISOString(),
          description: event.description,
          color: event.color
        };
      }).filter(Boolean); // Remove null values
    
      /* console.log("Formatted events:", formattedEvents); */
      setEvents(formattedEvents);
    };
    
    fetchEvents();
  
    const subscription = supabase
      .channel("events")
      .on("postgres_changes", { event: "*", schema: "public", table: "TurtleEvents" }, (payload) => {
        console.log("Change received!", payload);
        fetchEvents(); // Refresh events on change
      })
      .subscribe();
  
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

/*   const handleDateClick = async (arg: any) => {
    const title = prompt("Enter event title:");
    if (!title) return;

    const newEvent = {
      title,
      start: dayjs(arg.date).toISOString(),
      end: dayjs(arg.date).add(1, "hour").toISOString(),
    };

    const { data, error } = await supabase.from("events").insert([newEvent]).select();
    if (error) {
      console.error("Error adding event:", error);
    } else {
      setEvents([...events, { id: data[0].id, ...newEvent }]);
    }
  }; */

const [selectedEvent, /* setSelectedEvent */] = useState<null | EventApi>(null);
const [open, setOpen] = useState(false);

/* const handleEventClick = (clickInfo: { event: EventApi }) => {
  setSelectedEvent(clickInfo.event);
  setOpen(true);
}; */
  
const getCalendarView = () => (window.innerWidth < 768 ? "listMonth" : "dayGridMonth");
const [calendarView, setCalendarView] = useState(getCalendarView);

useEffect(() => {
  const updateView = () => {
    const newView = getCalendarView();
    if (newView !== calendarView) {
      setCalendarView(newView);
    }
  };

  window.addEventListener("resize", updateView);
  return () => window.removeEventListener("resize", updateView);
}, [calendarView]);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={calendarView}
        events={events}
        /* eventClick={handleEventClick} */
        eventContent={(eventInfo) => {
          const startDate = eventInfo.event.start ? new Date(eventInfo.event.start) : null;
          const endDate = eventInfo.event.end ? new Date(eventInfo.event.end) : null;
        
          const startTime = startDate
            ? startDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            : "Unknown";
        
          const endTime = endDate
            ? endDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            : "Unknown";

          return (
            <div style={{ padding: "4px"}}>
              <b>{startTime} - {endTime}</b>
              <br />
              <b>{eventInfo.event.title}</b>
            </div>
          );
        }}
        eventDidMount={(info) => {
          tippy(info.el, {
            content: info.event.extendedProps.description || "No description",
          });
        }}
      />
      {selectedEvent && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="EventDialog">
            <div className="EventDialogCard">
              <DialogTitle className="">{selectedEvent.title}</DialogTitle>
              <DialogDescription className="">
                {selectedEvent.extendedProps.description || "No description available"}
              </DialogDescription>
              {/* Fix for 'null' error */}
              {(() => {
                const startDate = selectedEvent.start ? new Date(selectedEvent.start) : null;
                const endDate = selectedEvent.end ? new Date(selectedEvent.end) : null;
                return (
                  <p className="text-sm text-gray-700">
                    📅 {startDate ? startDate.toLocaleString() : "Unknown"} -  
                    {endDate ? endDate.toLocaleString() : "Unknown"}
                  </p>
                );
              })()}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default Calendar;