import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideNav from "../components/SideNav/SideNav";
import "./MoviePage.css";
import Names from "../components/Names/Names";
import Rectangle from "../assets/images/Rectangle.png";
import Frame from "../assets/images/Frame.png";
import Tickets from "../assets/images/Tickets.png";
import List from "../assets/images/List.png";
import Rating from "../assets/images/Rating.png";

const Product = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = "aefb9c790f6654cb8dddcf8785a7cb66";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div className="app__product">
      <div>
        <SideNav />
      </div>
      <div className="main__section">
        <div className="main__img">
          <img
            src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
            alt={`${movies.title} Backdrop`}
            className="backdrop"
          />
          <img
            className="backdrop__overlay"
            style={{
              width: "150px",
              position: "absolute",
              zIndex: "10",
              top: "180px",
              right: "440px",
              cursor: "pointer",
            }}
            src={Frame}
            alt="frame"
          />
        </div>

        <div className="title-div">
          <div className="title-inner-div">
            <h4 className="movie-line1" data-testid="movie-title">
              {movies.title}
            </h4>
            <p data-testid="movie-release-date">{movies.release_date}</p>
            <p data-testid="movie-runtime">{movies.runtime}s</p>
          </div>
          <div className="rate">
            <img style={{ height: "30px" }} src={Rating} alt="star" />
          </div>
        </div>

        <div className="overview">
          <div className="overview-text">
            <p style={{ marginBottom: "1rem" }} data-testid="movie-overview">
              {movies.overview}
            </p>
            <span>
              <Names title="Director" name={"Joseph Kosinski"} />
              <Names
                title="Writers"
                name={"Jim Cash, Jack Epps Jr,  Peter Craig"}
              />
              <Names
                title="Stars"
                name={"Tom Cruise, Jennifer Connelly, Miles Teller"}
              />
            </span>
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <button className="widebtn">Top rated movie #2</button>
              <button
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid black",
                }}
              >
                Award 9 Nominations
              </button>
            </div>
          </div>
          <div className="last">
            <span
              style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              <button className="widebtn">
                <img src={Tickets} alt="tickets" /> See Showtimes
              </button>
              <button
                className="widebtn"
                style={{
                  background: "rgba(190, 18, 60, 10%)",
                  color: "black",
                  border: "1px solid #be123c",
                }}
              >
                <img src={List} alt="list" />
                More watch options
              </button>
            </span>
            <img
              style={{ width: "300px", marginTop: "1rem" }}
              src={Rectangle}
              alt="pictures"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
