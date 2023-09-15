import React, { useState } from "react";
import "./MovieCard.css";
import { FaHeart } from "react-icons/fa";

import Ratings from "../../components/Ratings/Ratings";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [color, setColor] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setColor(!color);
  };

  return (
    <div data-testid="movie-card" className="app__moviecard">
      <Link to={`/movie/${props.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt={`${props.title} Backdrop`}
          className="backdrop"
          data-testid="movie-poster"
        />
      </Link>
      <div className="like">
        <FaHeart
          style={{ color: color ? "red" : "white" }}
          onClick={handleClick}
        />
      </div>
      <p className="location" data-testid="movie-release-date">
        {props.release_date}
      </p>
      <p className="movie-title" data-testid="movie-title">
        {props.original_title}
      </p>
      <Ratings />
      <p className="genre">Action, Adventure, Horror</p>
    </div>
  );
};

export default MovieCard;
