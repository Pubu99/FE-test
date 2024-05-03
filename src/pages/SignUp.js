import { useState, useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./SignUp.css";

const SignUp = () => {
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

  const onLogInInsteadClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSocialMediaSignuploginClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  return (
    <div className="sign-up" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="1421px"
      />
      <section className="create-an-account1">
        <div className="frame-parent1">
          <div className="create-an-account-parent">
            <div className="create-an-account2">Create an account</div>
            <div className="log-in-instead" onClick={onLogInInsteadClick}>
              log in instead
            </div>
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">First name</div>
              <div className="password-hide-see5">
                <img className="icon5" alt="" src="/icon.svg" />
                <div className="hide5">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Last name</div>
              <div className="password-hide-see5">
                <img className="icon5" alt="" src="/icon.svg" />
                <div className="hide5">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Email</div>
              <div className="password-hide-see5">
                <img className="icon5" alt="" src="/icon.svg" />
                <div className="hide5">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type="email"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Mobile Number</div>
              <div className="password-hide-see5">
                <img className="icon5" alt="" src="/icon.svg" />
                <div className="hide5">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type="tel"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">NIC | Passport Number</div>
              <div className="password-hide-see5">
                <img className="icon5" alt="" src="/icon.svg" />
                <div className="hide5">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Password</div>
              <div className="password-hide-see5">
                <img className="icon5" alt="" src="/icon.svg" />
                <div className="hide5">Hide</div>
              </div>
            </div>
            <TextField
              className="text-field15"
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
            <div className="error-message5">Error message</div>
          </div>
          <div className="check-box">
            <FormControlLabel
              className="check-box1"
              label=""
              control={<Checkbox id="large" color="primary" required />}
            />
            <div className="i-want-to-container">
              <p className="by-creating-an-account-i-agre">
                <span>{`By creating an account, I agree to our `}</span>
                <span className="terms-of-use">Terms of use</span>
                <span className="span1">{` `}</span>
              </p>
              <p className="and-privacy-policy">
                <span className="and">and</span>
                <span className="span1">{` `}</span>
                <span className="privacy-policy">
                  <span>Privacy Policy</span>
                  <span className="span1">{` `}</span>
                </span>
              </p>
            </div>
          </div>
          <Button
            className="button5"
            disableElevation={true}
            color="primary"
            size="large"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 534, height: 64 }}
          >
            Create an account
          </Button>
          <div className="divider">
            <div className="divider1" />
            <div className="i-want-to-container">OR</div>
            <div className="divider1" />
          </div>
          <div
            className="social-media-signuplogin"
            onClick={onSocialMediaSignuploginClick}
          >
            <div className="social-media-logo-parent">
              <img
                className="social-media-logo"
                alt=""
                src="/social-media-logo.svg"
              />
              <div className="i-want-to-container">Continue with Google</div>
            </div>
          </div>
        </div>
      </section>
      <img className="sign-up-child" alt="" src="/rectangle-1423@2x.png" />
      <div className="divider3" />
      <div className="easyticketlk3">
        <div className="easyticketlk4">
          <span className="easyticketlk-txt1">
            <span>Sign Up For Easy</span>
            <b>Ticket</b>
            <span>.LK</span>
          </span>
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
        onEventsTextClick={onEventsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default SignUp;
