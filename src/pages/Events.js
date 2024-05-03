import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MusicCard from "../components/MusicCard";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import "./Events.css";

const Events = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onEventCard1ContainerClick = useCallback(() => {
    navigate("/view-event");
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
    <div className="events1" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="2992px"
      />
      <section className="topic-2">
        <div className="top-categories">
          <span className="top-categories-txt-container">
            <span className="top">Latest</span>
            <span className="categories"> Events</span>
          </span>
        </div>
        <img className="topic-2-child" alt="" src="/rectangle-5072.svg" />
      </section>
      <section className="categories-cards">
        <MusicCard />
      </section>
      <section className="topic-16">
        <div className="top-categories">
          <span className="top-categories-txt-container">
            <span className="top">Top</span>
            <span className="categories"> Categories</span>
          </span>
        </div>
        <img className="topic-2-child" alt="" src="/rectangle-5072.svg" />
      </section>
      <div className="banner-events">
        <img
          className="banner-events-child"
          alt=""
          src="/rectangle-14241@2x.jpg"
        />
        <img
          className="banner-events-item"
          alt=""
          src="/rectangle-1425@2x.png"
        />
      </div>
      <div className="search-bar1">
        <div className="search-bar-item" />
        <div className="group-div">
          <div className="search-container">
            <div className="search1">Search</div>
          </div>
        </div>
        <div className="rectangle-parent1">
          <div className="rectangle-div" />
          <div className="iconsmap-pin-group">
            <img className="iconsmap-pin1" alt="" src="/iconsmappin.svg" />
            <div className="zip-code-or1">{`Zip code or State `}</div>
          </div>
        </div>
        <div className="rectangle-parent2">
          <div className="rectangle-div" />
          <div className="date-group">
            <div className="date1">Date</div>
            <img className="iconscalendar1" alt="" src="/iconscalendar.svg" />
          </div>
        </div>
        <div className="rectangle-parent3">
          <div className="rectangle-div" />
          <div className="search-by-event-artist-venue-group">
            <div className="search-by-event1">{`Search by Event,  Artist, Venue... `}</div>
            <img className="iconssearch1" alt="" src="/iconssearch.svg" />
          </div>
        </div>
      </div>
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
        onAboutUsTextClick={onAboutUsTextClick}
        onGroupContainerClick={onGroupContainerClick}
      />
      <main className="event-cards1">
        <EventCard
          rectangle508="/rectangle-5089@2x.jpg"
          propTop="1088px"
          propLeft="1296px"
        />
        <EventCard
          rectangle508="/rectangle-50810@2x.jpg"
          propTop="1088px"
          propLeft="864px"
        />
        <EventCard
          rectangle508="/rectangle-50811@2x.jpg"
          propTop="1088px"
          propLeft="432px"
        />
        <EventCard
          rectangle508="/rectangle-50812@2x.jpg"
          propTop="1088px"
          propLeft="0px"
        />
        <EventCard
          rectangle508="/rectangle-508@2x.jpg"
          propTop="540px"
          propLeft="1296px"
        />
        <EventCard
          rectangle508="/rectangle-5082@2x.jpg"
          propTop="540px"
          propLeft="864px"
        />
        <EventCard
          rectangle508="/rectangle-5083@2x.jpg"
          propTop="540px"
          propLeft="432px"
        />
        <EventCard
          rectangle508="/rectangle-5084@2x.jpg"
          propTop="540px"
          propLeft="0px"
        />
        <EventCard
          rectangle508="/rectangle-5085@2x.jpg"
          propTop="0px"
          propLeft="1296px"
        />
        <EventCard
          rectangle508="/rectangle-5086@2x.jpg"
          propTop="0px"
          propLeft="864px"
        />
        <EventCard
          rectangle508="/rectangle-5087@2x.jpg"
          propTop="0px"
          propLeft="432px"
        />
        <EventCard
          rectangle508="/rectangle-5088@2x.jpg"
          propTop="0px"
          propLeft="0px"
          onEventCard1ContainerClick={onEventCard1ContainerClick}
        />
      </main>
    </div>
  );
};

export default Events;
