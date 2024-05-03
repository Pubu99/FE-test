import Card from "./Card";
import "./MusicCard.css";

const MusicCard = () => {
  return (
    <div className="card-parent">
      <Card rectangle1426="/rectangle-1426@2x.png" mUSIC="MUSIC" />
      <Card
        rectangle1426="/rectangle-1426@2x.png"
        mUSIC="SPORTS"
        propLeft="1152px"
      />
      <Card
        rectangle1426="/rectangle-1426@2x.png"
        mUSIC="EXHIBITION"
        propLeft="864px"
      />
      <Card
        rectangle1426="/rectangle-1426@2x.png"
        mUSIC="DRAMA"
        propLeft="576px"
      />
      <Card
        rectangle1426="/rectangle-1426@2x.png"
        mUSIC="CONCERTS"
        propLeft="288px"
      />
    </div>
  );
};

export default MusicCard;
