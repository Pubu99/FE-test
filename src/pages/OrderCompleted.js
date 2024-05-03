import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./OrderCompleted.css";

const OrderCompleted = () => {
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

  const onMainPageButtonClick = useCallback(() => {
    // Please sync "Admin View" to the project
  }, []);

  const onViewEventButtonClick = useCallback(() => {
    navigate("/download-ticket");
  }, [navigate]);

  return (
    <div className="order-completed" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="943px"
      />
      <Button
        className="main-page-button"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187, height: 53 }}
        onClick={onMainPageButtonClick}
      >
        Main Page
      </Button>
      <Button
        className="view-event-button"
        disableElevation={true}
        color="primary"
        size="medium"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187, height: 53 }}
        onClick={onViewEventButtonClick}
      >
        Get Ticket
      </Button>
      <div className="payment-successfull">Payment Successfull !</div>
      <img
        className="order-completed-child"
        alt=""
        src="/rectangle-1439@2x.png"
      />
      <section className="progress" id="SCR0002">
        <div className="edit">
          <img
            className="filled-progress-icon"
            alt=""
            src="/filled-progress.svg"
          />
          <div className="edit1">Edit</div>
        </div>
        <div className="review">
          <img
            className="filled-progress-icon1"
            alt=""
            src="/filled-progress1.svg"
          />
          <div className="review1">Review</div>
        </div>
        <div className="ticketing">
          <img
            className="filled-progress-icon1"
            alt=""
            src="/filled-progress1.svg"
          />
          <div className="ticketing1">Ticketing</div>
        </div>
        <div className="banner1">
          <img
            className="filled-progress-icon1"
            alt=""
            src="/filled-progress1.svg"
          />
          <div className="banner2">Banner</div>
        </div>
      </section>
      <section className="topic-21" id="SCR0001">
        <div className="create-event">Create Event</div>
        <img className="topic-2-item" alt="" src="/rectangle-5073.svg" />
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
    </div>
  );
};

export default OrderCompleted;
