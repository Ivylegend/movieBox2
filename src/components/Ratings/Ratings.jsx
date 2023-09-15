import React from "react";
import { FaImdb } from "react-icons/fa";
import Tomatoes from "../../assets/images/tomatoes.png";
import './Ratings.css';

const Ratings = () => {
  return (
    <div className="app__ratings">
      <span className="rating">
        <FaImdb />
        <p>800/100</p>
      </span>
      <span className="rating">
        <img src={Tomatoes} alt="tomatoes" />
        <p className="percentage">97%</p>
      </span>
    </div>
  );
};

export default Ratings;
