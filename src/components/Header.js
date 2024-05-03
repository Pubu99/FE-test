import { useMemo } from "react";
import "./Header.css";

const Header = ({
  header2Position,
  header2Top,
  header2Left,
  homeWidth,
  homeDisplay,
  homeHeight,
  homeFlex,
  eventsWidth,
  eventsDisplay,
  eventsHeight,
  eventsFlex,
  aboutUsWidth,
  aboutUsDisplay,
  aboutUsHeight,
  aboutUsFlex,
  groupDivWidth,
  groupDivFlex,
  onHomeTextClick,
  onEventsTextClick,
  onAboutUsTextClick,
  onGroupContainerClick,
}) => {
  const header2Style = useMemo(() => {
    return {
      position: header2Position,
      top: header2Top,
      left: header2Left,
    };
  }, [header2Position, header2Top, header2Left]);

  const homeStyle = useMemo(() => {
    return {
      width: homeWidth,
      display: homeDisplay,
      height: homeHeight,
      flex: homeFlex,
    };
  }, [homeWidth, homeDisplay, homeHeight, homeFlex]);

  const eventsStyle = useMemo(() => {
    return {
      width: eventsWidth,
      display: eventsDisplay,
      height: eventsHeight,
      flex: eventsFlex,
    };
  }, [eventsWidth, eventsDisplay, eventsHeight, eventsFlex]);

  const aboutUsStyle = useMemo(() => {
    return {
      width: aboutUsWidth,
      display: aboutUsDisplay,
      height: aboutUsHeight,
      flex: aboutUsFlex,
    };
  }, [aboutUsWidth, aboutUsDisplay, aboutUsHeight, aboutUsFlex]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      flex: groupDivFlex,
    };
  }, [groupDivWidth, groupDivFlex]);

  return (
    <div className="header-2" style={header2Style}>
      <div className="header-2-child" />
      <div className="header-topics">
        <div className="home" style={homeStyle} onClick={onHomeTextClick}>
          Home
        </div>
        <div className="home" style={eventsStyle} onClick={onEventsTextClick}>
          Events
        </div>
        <div className="home" style={aboutUsStyle} onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div
          className="rectangle-parent4"
          style={groupDivStyle}
          onClick={onGroupContainerClick}
        >
          <div className="group-child3" />
          <div className="log-in5">Log In</div>
        </div>
      </div>
      <div className="logo">
        <div className="easyticketlk7">
          <span className="easyticketlk-txt3">
            <span>Easy</span>
            <b>Ticket</b>
            <span>.LK</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
