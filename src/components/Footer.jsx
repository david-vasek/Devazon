import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import logo from "./imgs/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footerContainer">
        <h3 className="footerTitle">Developer Links</h3>
        <div className="name-box">
          <div className="name-row">
            <div className="devLink">
              <a
                href="https://github.com/david-vasek/Devazon"
                target="_blank"
                rel="noreferrer"
                className="footerNames"
              >
                Site Repository
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
