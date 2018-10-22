import React from "react";
import "./image.css"

const Image = props => (
  <div className = "pics">
    
      <img className = "img-fluid" onClick = {props.click} alt={props.id} src={props.image} id = {props.id} />
    
  </div>
);

export default Image;
