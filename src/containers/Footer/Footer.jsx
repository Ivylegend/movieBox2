import React from "react";
import Socials from "../../components/Socials/Socials";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <Socials />
      <div className="footer__links">
        <a href="">Conditions Of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Press Room</a>
      </div>
      <p className="footer__copyright">© 2023 MovieBox by Icha Victory</p>
    </div>
  );
};

export default Footer;
