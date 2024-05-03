import { useMemo } from "react";
import "./Stepper.css";

const Stepper = ({
  stepperPosition,
  stepperTop,
  stepperLeft,
  rectangleDivBackgroundColor,
  bGBackgroundColor,
  checkoutColor,
}) => {
  const stepperStyle = useMemo(() => {
    return {
      position: stepperPosition,
      top: stepperTop,
      left: stepperLeft,
    };
  }, [stepperPosition, stepperTop, stepperLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const bGStyle = useMemo(() => {
    return {
      backgroundColor: bGBackgroundColor,
    };
  }, [bGBackgroundColor]);

  const checkoutStyle = useMemo(() => {
    return {
      color: checkoutColor,
    };
  }, [checkoutColor]);

  return (
    <div className="stepper" style={stepperStyle}>
      <div className="group-parent">
        <div className="bg-parent">
          <div className="bg" />
          <div className="div7">1</div>
        </div>
        <div className="buy-tickets2">Buy Tickets</div>
      </div>
      <div className="stepper-child" style={rectangleDivStyle} />
      <div className="group-container">
        <div className="bg-parent">
          <div className="bg1" style={bGStyle} />
          <div className="div7">2</div>
        </div>
        <div className="checkout" style={checkoutStyle}>
          Checkout
        </div>
      </div>
      <div className="stepper-child" />
      <div className="group-container">
        <div className="bg-parent">
          <div className="bg1" />
          <div className="div7">3</div>
        </div>
        <div className="checkout">Done</div>
      </div>
    </div>
  );
};

export default Stepper;
