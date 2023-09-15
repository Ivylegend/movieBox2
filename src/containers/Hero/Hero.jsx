import React from "react";
import "./Hero.css";
import { FaImdb } from "react-icons/fa";
import Tomatoes from "../../assets/images/tomatoes.png";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="app__hero">
      <h1>John Wick 3 : Parabellum</h1>

      <div className="hero__ratings">
        <span className="herorating">
          <FaImdb />
          <p>800 / 100</p>
        </span>
        <span className="percent">
          <img src={Tomatoes} alt="tomatoes" />
          <p className="percentage">97%</p>
        </span>
      </div>

      <p>
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <button>
        <FaPlayCircle /> WATCH TRAILER
      </button>
    </div>
  );
};

export default Hero;
