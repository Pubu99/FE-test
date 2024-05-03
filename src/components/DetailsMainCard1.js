import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import "./DetailsMainCard1.css";

const DetailsMainCard1 = () => {
  const navigate = useNavigate();

  const onSeeMoreButtonClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <section className="details-main-card2">
      <div className="details-main-card-child1" />
      <div className="see-more-button3" onClick={onSeeMoreButtonClick}>
        <div className="check-out">Check Out</div>
      </div>
      <EventCard
        rectangle508="/rectangle-5088@2x.jpg"
        propTop="24px"
        propLeft="48px"
      />
      <div className="event-details3">
        <b className="natamu-neda5">Natamu Neda</b>
      </div>
      <div className="details-main-card-child2" />
    </section>
  );
};

export default DetailsMainCard1;
