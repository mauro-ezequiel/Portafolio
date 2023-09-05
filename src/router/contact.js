import Navbar from "../components/bar";
import React from "react";
import style from "../style/contact.modules.css";

function Contact() {
  console.log(style);

  return (
    <div className="Contact">
      <Navbar />
      <h1 className="title1">you can contact me in the following networks</h1>
      <i class="Bi bi-0-circle"></i>
    </div>
  );
}

export default Contact;
