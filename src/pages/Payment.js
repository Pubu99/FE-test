import { useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import OederSummary from "../components/OederSummary";
import Stepper from "../components/Stepper";
import Header from "../components/Header";
import "./Payment.css";

const Payment = () => {
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
    <div className="payment" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="1131px"
      />
      <div className="already-have-account-container">
        <span className="already-have-account-container1">
          <span>{`Already Have Account ? `}</span>
          <b>Log in Here</b>
        </span>
      </div>
      <OederSummary />
      <section className="create-an-account">
        <div className="frame-div">
          <div className="your-details-wrapper">
            <div className="your-details">Your Details</div>
          </div>
          <div className="first-name">
            <div className="label-parent">
              <div className="label">First name</div>
              <div className="password-hide-see">
                <img className="icon" alt="" src="/icon.svg" />
                <div className="hide">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field10"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message">Error message</div>
          </div>
          <div className="last-name">
            <div className="label-parent">
              <div className="label">Last name</div>
              <div className="password-hide-see">
                <img className="icon" alt="" src="/icon.svg" />
                <div className="hide">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field10"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message">Error message</div>
          </div>
          <div className="last-name">
            <div className="label-parent">
              <div className="label">Email</div>
              <div className="password-hide-see">
                <img className="icon" alt="" src="/icon.svg" />
                <div className="hide">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field10"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type="email"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message">Error message</div>
          </div>
          <div className="last-name">
            <div className="label-parent">
              <div className="label">Mobile Number</div>
              <div className="password-hide-see">
                <img className="icon" alt="" src="/icon.svg" />
                <div className="hide">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field10"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type="number"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message">Error message</div>
          </div>
          <div className="last-name">
            <div className="label-parent">
              <div className="label">NIC | Passport Number</div>
              <div className="password-hide-see">
                <img className="icon" alt="" src="/icon.svg" />
                <div className="hide">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field10"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message">Error message</div>
          </div>
        </div>
      </section>
      <div className="payment-child" />
      <Stepper
        stepperPosition="absolute"
        stepperTop="257px"
        stepperLeft="629px"
        rectangleDivBackgroundColor="#1e1e1e"
        bGBackgroundColor="#1e1e1e"
        checkoutColor="#1e1e1e"
      />
      <section className="topic-15">
        <h1 className="buy-tickets1">Buy Tickets</h1>
        <img className="topic-1-child2" alt="" src="/rectangle-5071.svg" />
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

export default Payment;
