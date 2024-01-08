import React from "react";
import style from "../style/props.modules.css";

function Card(props) {
  console.log(style);

  return (
    <div className="ca">
      <img className="img" src={props.img} alt={props.alt} />
    </div>
  );
}

export default Card;
