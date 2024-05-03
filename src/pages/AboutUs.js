import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Video from "../components/Video";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className="about-us">
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
        onGroupContainerClick={onGroupContainerClick}
      />
      <div className="body">
        <Video />
        <div className="easyticketlk-is-your-ticket-t-wrapper">
          <div className="easyticketlk-is-your">
            EasyTicket.LK is your ticket to freedom in Sri Lanka. It’s a
            marketplace that allows you to break free from virtual queues and
            frantic refreshing, steering clear of back-alley deals and the
            bitter disappointment of FOMO. A secure platform that empowers
            sellers to set their prices and ensures buyers don't miss out.
          </div>
        </div>
        <div className="image-safety">
          <div className="easyticketlk1">
            <div className="easyticketlk2">
              <span className="easyticketlk-txt">
                <span>Easy</span>
                <b>Ticket</b>
                <span>.LK</span>
              </span>
            </div>
          </div>
        </div>
        <div className="safty-text">
          <img className="shield-eye-icon" alt="" src="/shield-eye@2x.png" />
          <img className="shield-eye-icon1" alt="" src="/shield-eye@2x.png" />
          <img className="shield-eye-icon2" alt="" src="/shield-eye@2x.png" />
          <img className="shield-eye-icon3" alt="" src="/shield-eye@2x.png" />
          <div className="world-class-security">
            World class security checks
          </div>
          <div className="transparent-pricing">Transparent pricing</div>
          <div className="order-guarantee">100% order guarantee</div>
          <div className="customer-service-from">
            Customer service from start to finish
          </div>
        </div>
      </div>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="2271px"
      />
      <div className="providing-access-to-over-50-mi-wrapper">
        <div className="providing-access-to-container">
          <p className="providing-access-to">
            Providing access to over 50 million live event listings in Sri
            Lanka, we give you the freedom to buy or sell tickets from any
            device, using nearly every currency and language – any time.From
            sports to music, comedy to dance, festivals to theatre – we offer
            the widest choice of the most diverse events in Sri Lanka. The
            EasyTicket.LK 100% order guarantee covers both buyers and sellers,
            so rest assured, we’ve got your back.
          </p>
          <p className="enjoy-the-freedom">
            Enjoy the freedom to be surrounded by fellow fans, having the time
            of your life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
