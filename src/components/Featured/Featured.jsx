import React from "react";
import "./Featured.css";
import { FaChevronRight } from "react-icons/fa";

const Featured = (props) => {
  return (
    <div className="featured__header">
      <h2>Featured Movies</h2>
      <span className="see-more" onClick={props.event}>
        See More
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Featured;
