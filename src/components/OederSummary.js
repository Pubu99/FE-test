import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./OederSummary.css";

const OederSummary = () => {
  const navigate = useNavigate();

  const onPayNowButtonClick = useCallback(() => {
    navigate("/payment-page");
  }, [navigate]);

  return (
    <section className="oeder-summary">
      <div className="oeder-summary-child" />
      <div className="category1">Category</div>
      <div className="quantity">Quantity</div>
      <div className="ticket-quantities">
        <div className="standing3">Standing</div>
        <div className="div17">1</div>
        <div className="vip3">VIP</div>
        <div className="div18">0</div>
        <div className="total2">Total</div>
        <div className="lkr11">0.00 LKR</div>
        <div className="genaral3">Genaral</div>
        <div className="div19">1</div>
      </div>
      <div className="oeder-summary-item" />
      <div className="oeder-summary-inner" />
      <Button
        className="pay-now-button"
        disableElevation={true}
        color="primary"
        size="large"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 172, height: 42 }}
        onClick={onPayNowButtonClick}
      >
        Pay Now
      </Button>
      <div className="order-summary">Order Summary</div>
    </section>
  );
};

export default OederSummary;
