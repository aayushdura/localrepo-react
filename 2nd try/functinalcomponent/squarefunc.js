import React from "react";
import  ReactDOM  from "react-dom";

const Square=()=>{
    return(
        <button
        className="squ"
        onClick={() => this.props.onClick()
        }
      >
        {this.props.num}
      </button> );  
}

