import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    /*this will initiate the parent's constructor method,
    *super() allows the component to inherit methods from its parent (React.Component).*/
    this.state = { latitude: null, errorMessage: '', loading: true }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude ,loading: false})
      },
      (error) => {
          this.setState({ errorMessage: error.message , loading: false })
      }
    );
  }
 
   
  
  render(){
    const {
      latitude,errorMessage,loading
    }=this.state
    return (
      <div>
       {loading?"loading ... ":
       <div> 
         {errorMessage?
         errorMessage 
         :latitude}</div>}
      </div>
    )
 
}
}

ReactDOM.render(
<App />,
 document.getElementById("root")
 );
