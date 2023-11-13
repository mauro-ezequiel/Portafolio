import React from "react";
import style from "../style/list.modules.css";

function List() {
  console.log(style);
  return (
    <div className="list">
      <div id="tit">Mis habilidades:</div>
      <div className="icon">
        <div id="bo">
          <ion-icon name="logo-react" />
        </div>
        <h2 className="txt">REACT</h2>
      </div>
      <div className="icon">
        <div id="js">
          <ion-icon name="logo-javascript" />
        </div>
        <h2 className="txt">JAVASCRIPT</h2>
      </div>
      <div className="icon">
        <div id="html">
          <ion-icon name="logo-html5"></ion-icon>
        </div>

        <h2 className="txt">HTML</h2>
      </div>
      <div className="icon">
        <div id="bo">
          <ion-icon name="logo-css3" />
        </div>
        <h2 className="txt">CSS</h2>
      </div>

      <div className="icon">
        <div id="n">
          <ion-icon name="logo-github"></ion-icon>
        </div>
        <h2 className="txt">GIT-HUB</h2>
      </div>
      <div className="icon">
        <div id="html">
          <i class="bi bi-git"></i>
        </div>
        <h2 className="txt">GIT</h2>
      </div>
      <div className="icon">
        <div id="boot">
          <i class="bi bi-bootstrap-fill"></i>
        </div>
        <h2 className="txt"> BOOTSTRAP</h2>
      </div>
    </div>
  );
}

export default List;
