import React,{useState} from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";
const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setLatitude(position.coords.latitude);
      setLoading(false);
    },
    (error) => {
      setErrorMessage(error.message);
      setLoading(false);
    }
  );
  return (
     
    <div>
       
     </div>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
