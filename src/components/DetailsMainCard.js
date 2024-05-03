import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import "./DetailsMainCard.css";

const DetailsMainCard = () => {
  const navigate = useNavigate();

  const onSeeMoreButtonClick = useCallback(() => {
    navigate("/book-tickets-for-event");
  }, [navigate]);

  return (
    <main className="details-main-card1">
      <section className="details-main-card-item" />
      <Button
        className="see-more-button2"
        disableElevation={true}
        color="primary"
        size="large"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 193, height: 53 }}
        onClick={onSeeMoreButtonClick}
      >
        Buy Tickets
      </Button>
      <EventCard
        rectangle508="/rectangle-5088@2x.jpg"
        propTop="24px"
        propLeft="48px"
      />
      <img className="access-time-icon2" alt="" src="/access-time1.svg" />
      <img className="date-range-icon2" alt="" src="/date-range1.svg" />
      <img className="fmd-good-icon2" alt="" src="/fmd-good1.svg" />
      <section className="event-details1">
        <div className="featuring-bns-container">
          <span className="featuring-bns-container1">
            <p className="featuring-bns">{`Featuring : BNS | Jaya sri | Wasthi | Kanchana | Chithral | Sarith & Surith | Music by NEWS | `}</p>
            <p className="featuring-bns">{`Food & Beverage Available at the premises.`}</p>
          </span>
        </div>
        <div className="backstage-entertainment-events-container">
          <span className="featuring-bns-container1">
            <p className="featuring-bns">{`Backstage Entertainment Events `}</p>
            <p className="featuring-bns">Proudly Presents "NATAMU NEDA"</p>
          </span>
        </div>
        <div className="time2">
          <div className="pm2">07:00 PM</div>
        </div>
        <div className="date5">
          <div className="div13">15.02.2023</div>
        </div>
        <div className="viharamahadevi-open-air2">
          Viharamahadevi Open Air Theatre
        </div>
        <b className="natamu-neda2">Natamu Neda</b>
        <div className="category-buttons">
          <div className="music-wrapper">
            <div className="music">Music</div>
          </div>
          <div className="colombo-wrapper">
            <div className="music">Colombo</div>
          </div>
        </div>
      </section>
      <section className="ticket-price-details1">
        <div className="ticket-price-details-child1" />
        <b className="ticket-prices">Ticket Prices</b>
        <div className="ticket-price-model-11">
          <div className="standing2">Standing</div>
          <div className="lkr7">1000.00 LKR</div>
        </div>
        <div className="ticket-price-model-21">
          <div className="standing2">Genaral</div>
          <div className="lkr8">2000.00 LKR</div>
        </div>
        <div className="ticket-price-model-31">
          <div className="standing2">VIP</div>
          <div className="lkr8">5000.00 LKR</div>
        </div>
        <div className="ticket-price-details-child2" />
        <div className="ticket-price-details-child3" />
      </section>
      <div className="details-main-card-inner" />
    </main>
  );
};

export default DetailsMainCard;
