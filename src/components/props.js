import React from "react";
import style from "../style/props.modules.css";

function Card(props) {
  console.log(style);

  return (
    <div className="card">
      <video className="mp4" src={props.mp4} controls autoplay></video>
    </div>
  );
}

export default Card;
