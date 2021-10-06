import React from "react";
import SearchInput from "./searchinput";
import DisplayImages from "./displayimages";
const App = () => {
  return (
    <div>
        <div className="search">
      <SearchInput />
      </div><br />
      <div className="displayimg">
        <DisplayImages />
      </div>
    </div>
  );
};
export default App;
