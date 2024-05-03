import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PaymentPage.css";

const PaymentPage = () => {
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

  const onButtonContainerClick = useCallback(() => {
    navigate("/order-completed");
  }, [navigate]);

  return (
    <div className="payment-page" data-animate-on-scroll>
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
      <div className="frame-parent">
        <div className="frame-group">
          <div className="chevron-back-wrapper">
            <img className="chevron-back-icon" alt="" />
          </div>
          <div className="add-a-payment-method-parent">
            <b className="add-a-payment">Add a payment method</b>
            <div className="lets-get-you">
              Let’s get you all st up so you can access your personal account.
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="text-field-parent">
            <div className="text-field">
              <div className="text-field1">
                <div className="state-layer">
                  <div className="content">
                    <div className="input-text">
                      <div className="add-a-payment">4321 4321 4321 4321</div>
                    </div>
                    <div className="label-text">
                      <div className="add-a-payment">Card Number</div>
                    </div>
                  </div>
                  <div className="trailing-icon">
                    <img className="chevron-back-icon" alt="" src="/visa.svg" />
                  </div>
                </div>
              </div>
              <div className="supporting-text">
                <div className="supporting-text1">Supporting text</div>
              </div>
            </div>
            <div className="text-field-group">
              <div className="text-field2">
                <div className="text-field1">
                  <div className="state-layer1">
                    <div className="content1">
                      <div className="input-text2">
                        <div className="add-a-payment">mm/yy</div>
                      </div>
                      <div className="label-text2">
                        <div className="add-a-payment">Exp. Date</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="supporting-text">
                  <div className="supporting-text1">Supporting text</div>
                </div>
              </div>
              <div className="text-field2">
                <div className="text-field1">
                  <div className="state-layer1">
                    <div className="content1">
                      <div className="input-text2">
                        <div className="add-a-payment" />
                      </div>
                      <div className="label-text2">
                        <div className="add-a-payment">CVC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="supporting-text">
                  <div className="supporting-text1">Supporting text</div>
                </div>
              </div>
            </div>
            <div className="text-field6">
              <div className="text-field1">
                <div className="state-layer1">
                  <div className="content3">
                    <div className="input-text2">
                      <div className="add-a-payment" />
                    </div>
                    <div className="label-text2">
                      <div className="add-a-payment">Name on Card</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="supporting-text">
                <div className="supporting-text1">Supporting text</div>
              </div>
            </div>
            <div className="text-field6">
              <div className="text-field1">
                <div className="state-layer">
                  <div className="content">
                    <div className="input-text">
                      <div className="add-a-payment">Uni</div>
                    </div>
                    <div className="label-text">
                      <div className="add-a-payment">Country or Region</div>
                    </div>
                  </div>
                  <div className="trailing-icon">
                    <img
                      className="chevron-back-icon"
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="supporting-text">
                <div className="supporting-text1">Supporting text</div>
              </div>
            </div>
            <div className="checkbox-parent">
              <img className="chevron-back-icon" alt="" src="/checkbox.svg" />
              <div className="securely-save-my">
                Securely save my information for 1-click checkout
              </div>
            </div>
          </div>
          <div className="button-parent">
            <div className="button3" onClick={onButtonContainerClick}>
              <div className="style-layer">
                <div className="button4">Add payment method</div>
              </div>
            </div>
            <div className="by-confirming-your">
              By confirming your subscription, you allow The Outdoor Inn Crowd
              Limited to charge your card for this payment and future payments
              in accordance with their terms. You can always cancel your
              subscription.
            </div>
          </div>
        </div>
      </div>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="857px"
      />
    </div>
  );
};

export default PaymentPage;
