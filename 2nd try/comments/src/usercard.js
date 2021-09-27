import React from "react";
import "./usercard.css";

const UserCard = (props) => {
  const style1 = {
    width: "100%",
    borderBottomRightRadius: "15px",
  };
  return (
    <div className="card" id="uicard">
      <div className="content">
        <div className="description">{props.children}</div>
      </div>
      <div className="ui bottom button" style={style1}>
        <i className="add icon"></i>
        Add Friend
      </div>
    </div>
  );
};
export default UserCard;
