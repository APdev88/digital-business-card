import React from "react";
import Twitter from "../img/icons/twitter.png";
import Facebook from "../img/icons/facebook.png";
import Instagram from "../img/icons/instagram.png";
import Github from "../img/icons/github.png";

function Icons() {
  return (
    <footer className="footer">
      <a href="https://www.twitter.com" target="__blank">
        <img src={Twitter} className="footer-twitter" />
      </a>
      <a href="https://www.facebook.com" target="__blank">
        <img src={Facebook} className="footer-facebook" />
      </a>
      <a href="https://www.instagram.com" target="__blank">
        <img src={Instagram} className="footer-instagram" />
      </a>
      <a href="https://www.github.com" target="__blank">
        <img src={Github} className="footer-github" />
      </a>
    </footer>
  );
}

export default Icons;
