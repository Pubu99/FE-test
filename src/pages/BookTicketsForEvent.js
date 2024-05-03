import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsMainCard1 from "../components/DetailsMainCard1";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
import Footer from "../components/Footer";
import "./BookTicketsForEvent.css";

const BookTicketsForEvent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="book-tickets-for-event" data-animate-on-scroll>
      <DetailsMainCard1 />
      <section className="topic-13">
        <h1 className="buy-tickets">Buy Tickets</h1>
        <img className="rectangle-icon" alt="" src="/rectangle-5071.svg" />
      </section>
      <img
        className="book-tickets-for-event-child"
        alt=""
        src="/rectangle-1424@2x.jpg"
      />
      <Header
        header2Position="absolute"
        header2Top="0px"
        header2Left="0px"
        homeWidth="96px"
        homeDisplay="flex"
        homeHeight="32px"
        homeFlex="unset"
        eventsWidth="96px"
        eventsDisplay="flex"
        eventsHeight="32px"
        eventsFlex="unset"
        aboutUsWidth="96px"
        aboutUsDisplay="flex"
        aboutUsHeight="32px"
        aboutUsFlex="unset"
        groupDivWidth="96px"
        groupDivFlex="unset"
        onHomeTextClick={onHomeTextClick}
        onEventsTextClick={onEventsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <Stepper
        stepperPosition="absolute"
        stepperTop="888px"
        stepperLeft="653px"
        rectangleDivBackgroundColor="#333"
        bGBackgroundColor="rgba(30, 30, 30, 0.5)"
        checkoutColor="rgba(30, 30, 30, 0.5)"
      />
      <section className="book-tickets-for-event-item" />
      <div className="category">Category</div>
      <div className="price">Price</div>
      <div className="no-of-tickets">No. of Tickets</div>
      <div className="amount">Amount</div>
      <div className="total">
        <b className="total1">Total</b>
        <div className="lkr">0.00 LKR</div>
      </div>
      <div className="catergory-1">
        <div className="standing1">Standing</div>
        <div className="lkr1">2000.00 LKR</div>
        <div className="lkr2">0.00 LKR</div>
        <div className="button">
          <img className="duotoneminus-icon" alt="" src="/duotoneminus.svg" />
          <div className="div3">03</div>
          <img className="duotoneminus-icon" alt="" src="/duotoneplus.svg" />
        </div>
      </div>
      <div className="category-2">
        <div className="genaral1">Genaral</div>
        <div className="lkr3">3000.00 LKR</div>
        <div className="lkr">0.00 LKR</div>
        <div className="button1">
          <img className="duotoneminus-icon" alt="" src="/duotoneminus1.svg" />
          <div className="div3">03</div>
          <img className="duotoneminus-icon" alt="" src="/duotoneplus1.svg" />
        </div>
      </div>
      <div className="category-3">
        <div className="genaral1">VIP</div>
        <div className="lkr3">5000.00 LKR</div>
        <div className="lkr">0.00 LKR</div>
        <div className="button1">
          <img className="duotoneminus-icon" alt="" src="/duotoneminus1.svg" />
          <div className="div3">03</div>
          <img className="duotoneminus-icon" alt="" src="/duotoneplus1.svg" />
        </div>
      </div>
      <div className="book-tickets-for-event-inner" />
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="1599px"
      />
    </div>
  );
};

export default BookTicketsForEvent;
