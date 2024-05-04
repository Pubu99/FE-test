import { useMemo } from "react";
import "./EventCard.css";

const EventCard = ({
  rectangle508,
  propTop,
  propLeft,
  onEventCard1ContainerClick,
}) => {
  const eventCard8Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="event-card8"
      style={eventCard8Style}
      onClick={onEventCard1ContainerClick}
    >
      <img className="event-card8-child" alt="" src={rectangle508} />
      <img className="event-card8-child" alt="" src="/rectangle-5081@2x.png" />
      <div className="time1">
        <img className="access-time-icon1" alt="" src="/access-time.svg" />
        <div className="time">07:00 PM</div>
      </div>
      <div className="date4">
        <img className="access-time-icon1" alt="" src="/date-range.svg" />
        <div className="date">02.12.2023</div>
      </div>
      <div className="location1">
        <img className="fmd-good-icon1" alt="" src="/fmd-good.svg" />
        <div className="the-location">
          Viharamahadevi Open Air Theater
        </div>
      </div>
      <div className="event-name">Natamu Neda</div>
    </div>
  );
};

export default EventCard;
