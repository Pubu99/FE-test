import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsMainCard from "../components/DetailsMainCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ViewEvent.css";

const ViewEvent = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
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
    <div className="view-event" data-animate-on-scroll>
      <DetailsMainCard />
      <section className="topic-11">
        <div className="event-details">Event Details</div>
        <img className="topic-1-item" alt="" src="/rectangle-5071.svg" />
      </section>
      <img className="view-event-child" alt="" src="/rectangle-1424@2x.jpg" />
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
        onGroupContainerClick={onGroupContainerClick}
      />
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="1536px"
      />
    </div>
  );
};

export default ViewEvent;
