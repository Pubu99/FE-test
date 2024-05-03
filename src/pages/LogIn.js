import { useState, useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LogIn.css";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

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

  const onButton1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="log-in" data-animate-on-scroll>
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
      <div className="log-in1" />
      <div className="easyticketlk5">
        <div className="easyticketlk6">
          <span className="easyticketlk-txt2">
            <span>Easy</span>
            <b>Ticket</b>
            <span>.LK</span>
          </span>
        </div>
      </div>
      <section className="log-in2">
        <div className="frame-parent2">
          <div className="log-in-wrapper">
            <div className="log-in3">Log in</div>
          </div>
          <div className="email-log-in-parent">
            <div className="email-log-in">
              <div className="log-in-parent">
                <div className="log-in4">Log in</div>
                <div className="email2">
                  <div className="label-parent9">
                    <div className="label11">Email address</div>
                    <div className="password-hide-see11">
                      <img className="icon11" alt="" src="/icon.svg" />
                      <div className="hide11">Hide</div>
                    </div>
                  </div>
                  <TextField
                    className="text-field21"
                    color="primary"
                    size="medium"
                    required={true}
                    fullWidth={true}
                    variant="outlined"
                    type="email"
                    sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                  />
                  <div className="error-message11">Error message</div>
                </div>
                <div className="email2">
                  <div className="label-parent9">
                    <div className="label11">Password</div>
                    <div className="password-hide-see12">
                      <img className="icon11" alt="" src="/icon.svg" />
                      <div className="hide11">Hide</div>
                    </div>
                  </div>
                  <TextField
                    className="text-field21"
                    color="primary"
                    size="medium"
                    required={true}
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPasswordClick}
                            aria-label="toggle password visibility"
                          >
                            <Icon>
                              {showPassword ? "visibility_off" : "visibility"}
                            </Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                  />
                  <div className="error-message11">Error message</div>
                </div>
                <Button
                  className="button6"
                  disableElevation={true}
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: 354,
                    height: 56,
                  }}
                >
                  Log in
                </Button>
              </div>
            </div>
            <img className="divider-icon" alt="" src="/divider@2x.png" />
            <div className="log-in-with-other">
              <div className="divider4" />
              <div className="social-media-signuplogin-parent">
                <a
                  className="social-media-signuplogin1"
                  href="https://www.google.com/"
                  target="_blank"
                >
                  <div className="social-media-logo-group">
                    <img
                      className="icons"
                      alt=""
                      src="/social-media-logo1.svg"
                    />
                    <div className="continue-with-facebook">
                      Continue with Google
                    </div>
                  </div>
                </a>
                <a
                  className="social-media-signuplogin1"
                  href="https://facebook.com/"
                  target="_blank"
                >
                  <div className="social-media-logo-container">
                    <img
                      className="social-media-logo2"
                      alt=""
                      src="/social-media-logo2.svg"
                    />
                    <div className="continue-with-facebook">
                      Continue with Facebook
                    </div>
                  </div>
                </a>
                <a className="button7" onClick={onButton1Click}>
                  <div className="icons-parent">
                    <img className="icons" alt="" src="/icons.svg" />
                    <div className="continue-with-facebook">{`Register Now `}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="forgot-password-parent">
            <div className="forgot-password">Forgot Password ?</div>
            <div className="link-text">
              <div className="continue-with-facebook">
                <p className="secure-login-with">{`Secure Login with reCAPTCHA subject to `}</p>
                <p className="secure-login-with">
                  <span>{`Google `}</span>
                  <span className="terms">Terms</span>
                  <span className="span4">{` & `}</span>
                  <span className="terms">Privacy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="986px"
      />
    </div>
  );
};

export default LogIn;
