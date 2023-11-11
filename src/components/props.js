import React from "react";
import style from "../style/props.modules.css";

function Card(props) {
  console.log(style);

  return (
    <div className="ca">
      <img className="img " src={props.img} alt={props.alt} />
      <div className="container">
        <h1 className="txt">information:{props.t}.</h1>
      </div>
    </div>
  );
}

export default Card;
