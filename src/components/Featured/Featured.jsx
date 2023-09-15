import React from "react";
import "./Featured.css";
import { FaChevronRight } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="featured__header">
      <h2>Featured Movies</h2>
      <span className="see-more">
        See More
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Featured;
