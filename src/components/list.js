import React from "react";
import style from "../style/list.modules.css";

function List() {
  console.log(style);
  return (
    <div className="list">
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">
          My abilities
        </li>
        <li class="list-group-item">
          <i class="bi b1 bi-filetype-jsx" />
          <h2 className="txt"> REACT</h2>
        </li>
        <li class="list-group-item">
          <i class="bi b2 bi-filetype-js"></i>
          <h2 className="txt">javascript</h2>
        </li>
        <li class="list-group-item">
          <i class="bi b3 bi-filetype-html"></i>
          <h2 className="txt">HTML</h2>
        </li>
        <li class="list-group-item">
          <i class="bi b1 bi-filetype-css"></i>
          <h2 className="txt">CSS</h2>
        </li>
        <li class="list-group-item">
          <i class="bi b5 bi-github"></i>
          <h2 className="txt">GIT-HUB</h2>
        </li>
        <li class="list-group-item">
          <i class="bi b6 bi-bootstrap"></i>
          <h2 className="txt">bootstrap</h2>
        </li>
      </ul>
    </div>
  );
}

export default List;
