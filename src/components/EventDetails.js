import "./EventDetails.css";

const EventDetails = () => {
  return (
    <section className="event-details2">
      <div className="no-of-tickets1">
        <img className="sell-icon" alt="" src="/sell.svg" />
        <div className="no-of-tickets2">No of Tickets :</div>
        <div className="div15">3</div>
        <div className="t123456">T123456</div>
        <div className="b123456">B123456</div>
        <div className="successful">Successful</div>
        <div className="lkr10">5000.00LKR</div>
      </div>
      <div className="ticket-id">
        <img className="sell-icon1" alt="" src="/sell.svg" />
        <div className="ticket-id1">Ticket ID :</div>
      </div>
      <div className="amount1">
        <img className="payments-icon" alt="" src="/payments.svg" />
        <div className="amount2">Amount :</div>
      </div>
      <div className="booking-id">
        <img
          className="label-important-icon"
          alt=""
          src="/label-important.svg"
        />
        <div className="booking-id1">Booking ID :</div>
      </div>
      <div className="booking-status">
        <img className="payments-icon" alt="" src="/bookmark-border.svg" />
        <div className="amount2">Booking Status :</div>
      </div>
      <div className="time4">
        <div className="pm4">07:00 PM</div>
        <img className="access-time-icon4" alt="" src="/access-time1.svg" />
      </div>
      <div className="date7">
        <div className="div16">15.02.2023</div>
        <img className="date-range-icon4" alt="" src="/date-range1.svg" />
      </div>
      <div className="location3">
        <img className="fmd-good-icon4" alt="" src="/fmd-good1.svg" />
        <div className="viharamahadevi-open-air4">
          Viharamahadevi Open Air Theatre
        </div>
      </div>
      <b className="natamu-neda4">Natamu Neda</b>
    </section>
  );
};

export default EventDetails;
