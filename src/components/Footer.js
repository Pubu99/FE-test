import { useMemo } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./Footer.css";

const Footer = ({ communicationCall, details1Top }) => {
  const footerStyle = useMemo(() => {
    return {
      top: details1Top,
    };
  }, [details1Top]);

  return (
    <footer className="footer" style={footerStyle}>
      <div className="details-1">
        <div className="streamlined-ticket-booking">
          Streamlined ticket booking for a world of experiences. From concerts
          to sports, our platform ensures hassle-free access. Your journey to
          unforgettable moments begins with us. Discover, book, and enjoy!
        </div>
        <div className="copyright-2024">
          Copyright 2024 © EasyTicket.lk All Rights Reserved.
        </div>
        <div className="easyticketlk8">
          <span className="easyticketlk-txt4">
            <span>
              <span>E</span>
            </span>
            <span className="asyticketlk">
              <span>asy</span>
              <b>Ticket</b>
              <span className="lk1">.LK</span>
            </span>
          </span>
        </div>
      </div>
      <div className="details-2">
        <div className="phone">
          <div className="div11">+94 71 123 456</div>
          <img className="communication-call" alt="" src={communicationCall} />
        </div>
        <div className="email3">
          <div className="easyticketgmailcom">easyticket@gmail.com</div>
          <img
            className="communication-call"
            alt=""
            src="/communication--email@2x.png"
          />
        </div>
        <div className="address">
          <div className="hapugala-galle-srilanka-container">
            <p className="hapugala-galle">Hapugala, Galle</p>
            <p className="hapugala-galle">SriLanka</p>
          </div>
          <img
            className="communication-call"
            alt=""
            src="/communication--location-on@2x.png"
          />
        </div>
        <b className="get-in-touch">Get in Touch</b>
      </div>
      <div className="details-3">
        <div className="privacy-policy2">Privacy Policy</div>
        <div className="terms-conditions">{`Terms & Conditions`}</div>
        <b className="follow-us-on">Follow us On</b>
        <div className="from-header">
          <div className="home1">Home</div>
          <div className="events4">Events</div>
          <div className="about-us2">About US</div>
          <div className="categories1">Categories</div>
        </div>
        <div className="social-media-icons">
          <img className="iconfacebook" alt="" src="/iconfacebook.svg" />
          <img className="iconinstagram" alt="" src="/iconinstagram.svg" />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="iconlinkedin" alt="" src="/iconlinkedin.svg" />
        </div>
      </div>
      <div className="details-4">
        <Button
          className="subscribe-button"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 206.8 }}
        >
          Subscribe
        </Button>
        <div className="email4">
          <TextField
            className="enter-your-email"
            color="primary"
            placeholder="Enter Your Email"
            variant="outlined"
            type="email"
            sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "385px" }}
          />
          <div className="your-email">Your Email</div>
        </div>
        <b className="join-a-newsletter">Join a Newsletter</b>
      </div>
    </footer>
  );
};

export default Footer;
