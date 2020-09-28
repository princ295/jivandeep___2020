import React, { useState , useEffect } from "react";
import Form from "../froms/Form";

class Dumy extends React.Component {
  result = (values) => {
    console.log(values)
  }
 render() {
  return (
    <Form onSubmit={this.result}/>
  );
  }
 }
 

export default Dumy;