import React, { useState , useEffect } from "react";
import Cadover from "./../cadover/Cadover";

class Codoverlauout extends React.Component {
  result = (values) => {
    console.log(values)
  }
 render() {
  return (
    <Cadover onSubmit={this.result}/>
  );
  }
 }
 

export default Codoverlauout;