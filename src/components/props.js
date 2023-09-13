import React from "react";
import style from "../style/props.modules.css";

function Card(props) {
  console.log(style);

  return (
    <div className="card">
      <img className="img" src={props.image} alt={props.alt} />
    </div>
  );
}

export default Card;
