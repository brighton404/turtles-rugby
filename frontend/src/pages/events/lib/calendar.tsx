import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import iCalendarPlugin from '@fullcalendar/icalendar';
import { CalendarOptions } from '@fullcalendar/core';

const CalendarComponent: React.FC = () => {
  const [calendarOptions, /* setCalendarOptions */] = useState<CalendarOptions>({
    plugins: [dayGridPlugin, interactionPlugin, iCalendarPlugin],
    initialView: 'dayGridMonth',
    editable: false, // Set to false since you're using a read-only iCal feed
    events: {
      url: 'https://calendar.google.com/calendar/ical/a4087575170e31b410e5d8fb81a5eb8e0794fc0466e65fe77c5315c939e12f65%40group.calendar.google.com/public/basic.ics', // Replace with your iCal URL
      format: 'ics', // Explicitly set the format to ics
    },
    eventColor: 'blue', // Customize event color
    // ... other calendar options as needed
  });

  useEffect(() => {
    // You might want to do some error handling here in case the iCal URL is invalid.
    // FullCalendar will handle most of the parsing, but you can add your own checks:
    // fetch(calendarOptions.events.url)
    //   .then(response => {
    //     if (!response.ok) {
    //       console.error("Error fetching iCal feed:", response.status);
    //       // Optionally set a default event source or display an error message
    //       setCalendarOptions(prevState => ({
    //         ...prevState,
    //         events: [] // Or a default event source
    //       }));
    //     }
    //   })
    //   .catch(error => {
    //     console.error("Error fetching iCal feed:", error);
    //     setCalendarOptions(prevState => ({
    //       ...prevState,
    //       events: [] // Or a default event source
    //     }));
    //   });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <FullCalendar {...calendarOptions} />
    </div>
  );
};

export default CalendarComponent;