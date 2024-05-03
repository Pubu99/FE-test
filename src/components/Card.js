import { useMemo } from "react";
import "./Card.css";

const Card = ({ rectangle1426, mUSIC, propLeft }) => {
  const cardStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="card" style={cardStyle}>
      <div className="rectangle-parent8">
        <img className="group-child7" alt="" src={rectangle1426} />
        <div className="group-child8" />
      </div>
      <div className="music1">{mUSIC}</div>
    </div>
  );
};

export default Card;
