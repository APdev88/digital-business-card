import React from "react";
import Facebook from "../img/icons/facebook.png";
import Github from "../img/icons/github.png";
import Instagram from "../img/icons/instagram.png";
import Twitter from "../img/icons/twitter.png";
import Icon from "../img/icons/icon.png";
import Linkedin from "../img/icons/vector.png";

function Buttons() {
  return (
    <div className="buttons">
      <button href="#" className="btn btn-email">
        <img src={Icon} /> Email
      </button>
      <a href="https://www.linkedin.com" target="__blank" className="btn btn-linkedin">
        <button>
          <img src={Linkedin} /> Linkedin
        </button>
      </a>
    </div>
  );
}

export default Buttons;
