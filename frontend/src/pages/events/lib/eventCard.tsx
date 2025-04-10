import React from "react";
import { Event } from "./eventTypes";
import { ButtonColor, ButtonState } from "@/assets/lib/actionButton";
import Button from "@/assets/lib/button";

interface EventCardProps {
    event: Event;
}
const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const Ticket = () => {
        window.location.href = `${event.ticket}`;
      };
    const styles = {
        background: {
          backgroundImage: `url('${event.imageUrl}')`,
          aspectRatio: `16 / 9`,
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
            <div className="column card-description-wrap">
                <div className="event-name column">
                    <h3>{event.title}</h3>
                </div>
                <div className="column event-desc">
                    <div className="row">
                        <span className="Text_S_Normal bold">{event.location}</span>
                    </div>
                    <div className="event-desc-child-layer">
                        <div className="row gap-2">
                            <span className="Text_S_Normal bold">Time: </span>
                            <span className="Text_S_Normal">
                                {new Date(event.start).toLocaleDateString()} - {new Date(event.end).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="column">
                            <span className="Text_S_Normal bold">Description</span>
                            <span className="Text_S_Normal">{event.description}</span>
                        </div>
                    </div>
                    <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} onClick={Ticket}> Get Tickets </Button>
                </div>
            </div>
        </div>
    )
};
export default EventCard;