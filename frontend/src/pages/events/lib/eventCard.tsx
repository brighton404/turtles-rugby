import React from "react";
import { Event } from "./eventTypes";
import { ButtonColor, ButtonState } from "@/assets/lib/actionButton";
import Button from "@/assets/lib/button";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
    event: Event;
}
const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const navigate = useNavigate();
    const now = new Date();
    const eventHasEnded = new Date(event.end) < now;
    const FreeEvent = event.ticket.toLowerCase().includes("free");


    const Ticket = () => {
        if (!eventHasEnded) {
        if (FreeEvent) {
            navigate("");
        } else {
            window.location.href = `${event.ticket}`;
        }
    }
    };
    const styles = {
        background: {
          backgroundImage: `url('${event.imageUrl}')`,
          /* aspectRatio: `16 / 9`, */
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top`,
          backgroundSize: `cover`,
        },
        shade: {
          background: `linear-gradient(45deg, rgba(18,18,18,1) 0%, rgba(12,12,12,1) 36%, rgba(255,255,255,0) 100%)`,
        }
      }

    return (
        <div className="event-card" style={styles.background}>
            <div className="card-description-wrap">
                <div className="child">
                    <div className="event-name column">
                        <h3>{event.title}</h3>
                    </div>
                    <div className="column event-desc">
                        <div className="row gap-2">
                            <span className="Text_Normal bold">At: </span>
                            <span className="Text_Normal bold">{event.location}</span>
                        </div>
                        <div className="event-desc-child-layer">
                            <div className="row gap-2">
                                <span className="Text_Normal bold">Date: </span>
                                <span className="Text_Normal">
                                    {new Date(event.start).toLocaleDateString()} {/* - {new Date(event.end).toLocaleDateString()} */}
                                </span>
                            </div>
                            <div className="column desc-layer">
                                <span className="Text_Normal bold">Description:</span>
                                <span className="Text_Normal">{event.description}</span>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="event-action">
                {eventHasEnded ? 
                    <div className="eventHasEnded">
                        <span>Event has Ended</span>
                    </div>
                    : 
                    <Button
                        color={ButtonColor.Accent}
                        state={ButtonState.Default}
                        isOutlined={false}
                        onClick={Ticket}
                        disabled={false}
                    >
                        {FreeEvent ? "Free Event" : "Paid Event"}
                    </Button>
                 }
                 </div>
            </div>
        </div>
    )
};
export default EventCard;