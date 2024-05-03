import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./GuidlinesPage.css";

const GuidlinesPage = () => {
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

  const onAgreeContinueClick = useCallback(() => {
    navigate("/admin-view");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/view-event");
  }, [navigate]);

  return (
    <div className="guidlines-page">
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="887px"
      />
      <Button
        className="agree-continue"
        disableElevation={true}
        color="primary"
        size="large"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 231, height: 53 }}
        onClick={onAgreeContinueClick}
      >{`Agree & Continue`}</Button>
      <Button
        className="back"
        disableElevation={true}
        color="primary"
        size="large"
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 192, height: 53 }}
        onClick={onBackClick}
      >
        Back
      </Button>
      <section className="rules">
        <div className="all-tickets-purchased-container">
          <ol className="all-tickets-purchased-are-non-">
            <li className="all-tickets-purchased">
              All tickets purchased are non-refundable.
            </li>
            <li className="all-tickets-purchased">
              Please note that our online tickets cannot be changed once
              purchased. This includes changes to the category, show, seat,
              price, or any other aspects of the ticket. We highly recommend
              that you carefully review your selection before completing your
              online purchase to ensure that you have chosen the correct ticket.
            </li>
            <li className="all-tickets-purchased">
              Please note that online tickets are only available for redemption
              from one hour before the start of the event until one hour after
              the event has started. EasyTicket.LK will not issue online tickets
              after this time and cannot be held responsible for any
              inconvenience caused. To ensure you have enough time to enjoy the
              event, please make sure to arrive at the venue on time.
            </li>
            <li className="all-tickets-purchased">
              Only the initial email or SMS provided by EasyTicket.LK will be
              accepted as proof of purchase. Tickets will not be redeemed for
              any forwarded or screenshots.
            </li>
            <li className="all-tickets-purchased">
              Valid NIC or Passport will be required if needed during the
              process of redeeming.
            </li>
            <li className="all-tickets-purchased">
              If available, kindly choose the option for ticket delivery for the
              appropriate event to avoid the line-up at the entrance for
              redemption.
            </li>
            <li>
              EasyTicket.LK shall not be held accountable for any inconvenience
              caused in the organization of the concert.
            </li>
          </ol>
        </div>
      </section>
      <section className="topic-14">
        <div className="terms-and-conditions">Terms and Conditions</div>
        <img className="topic-1-child1" alt="" src="/rectangle-5071.svg" />
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

export default GuidlinesPage;
