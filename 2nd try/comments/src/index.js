import React from "react";
import ReactDOM from "react-dom";
import Comment from "./container1";
import Nisshre from "./image/dp1ns.jpg";
import Amankr from "./image/dp2ak.jpg";
import Dipbrl from "./image/dp3db.jpg";
import UserCard from "./usercard";
import "./index.css";
const App = () => {
  return (
    <div className="uicomments">
      <UserCard>
        <Comment
          name="Nischal Shrestha"
          text="Flabergastic"
          time="4 hrs ago"
          picture={Nisshre}
        />
      </UserCard>
      <br></br>
      <UserCard>
      <Comment
        name="Aman Koirala"
        text="k cha sathi haru"
        time="Just now"
        picture={Amankr}
      /></UserCard>
      <br></br>
      <UserCard>
      <Comment
        name="Dipin Baral"
        text="Oho herooo"
        time="10 mins ago"
        picture={Dipbrl}
      /></UserCard>
      <br></br>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
