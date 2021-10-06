import React from "react";
import "./HemisphereDisplay.css";
import northernPic from "./images/northern.jpg";
import southernPic from "./images/southern.jpg";

//This can also be done
// const HemisphereDisplay = ({latitude}) =>{}
const HemisphereDisplay = (props) => {
  let { latitude } = props;
  let lats =
    latitude <= 0
      ? "Hey you're in Southern Hemisphere....Your current latitude is:" +
        latitude
      : "Hey you're in Northern Hemisphere....Your current latitude is:" +
        latitude;
  let pics = latitude <= 0 ? southernPic : northernPic;
  return (
    <div>
      <div className="lats">{lats}</div>
      <img src={pics} className="pictures" alt="Respective hemisphere"></img>
    </div>
  );
};
export default HemisphereDisplay;
