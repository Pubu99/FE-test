import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventCard1 from "../components/EventCard1";
import EventDetails from "../components/EventDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DownloadTicket.css";

const DownloadTicket = () => {
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
    <div className="download-ticket" data-animate-on-scroll>
      <section className="download-ticket-child" />
      <section className="details-main-card">
        <Button
          className="see-more-button1"
          disableElevation={true}
          color="primary"
          size="large"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Download Your Ticket
        </Button>
        <EventCard1 />
        <EventDetails />
        <section className="ticket-price-details">
          <div className="ticket-price-details-child" />
          <b className="tickets">Tickets</b>
          <div className="ticket-price-model-1">
            <div className="standing">Standing</div>
            <div className="div">1</div>
          </div>
          <div className="ticket-price-model-2">
            <div className="genaral">Genaral</div>
            <div className="div1">2</div>
          </div>
          <div className="ticket-price-model-3">
            <div className="standing">VIP</div>
            <div className="div1">0</div>
          </div>
          <div className="ticket-price-details-item" />
          <div className="ticket-price-details-inner" />
        </section>
        <div className="details-main-card-child" />
      </section>
      <section className="topic-12">
        <div className="ticket-details">Ticket Details</div>
        <img className="topic-1-inner" alt="" src="/rectangle-5071.svg" />
      </section>
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
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="910px"
      />
    </div>
  );
};

export default DownloadTicket;
