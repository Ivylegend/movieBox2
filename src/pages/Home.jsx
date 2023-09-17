import React, { useState, useEffect } from "react";
import Featured from "../components/Featured/Featured";
import Hero from "../containers/Hero/Hero";
import MovieCard from "../containers/MovieCard/MovieCard";
import "../App.css";
import Footer from "../containers/Footer/Footer";
import Logo from "../assets/images/Logo.png";
import Menu from "../assets/images/Menu.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const apiKey = "aefb9c790f6654cb8dddcf8785a7cb66";
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const apiSearch =
    "https://api.themoviedb.org/3/search/movie?api_key=aefb9c790f6654cb8dddcf8785a7cb66&query=";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(apiSearch + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    setTerm("");
  };

  const seeMore = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, 25)))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  if (!loading) {
    return <p>Loading...</p>;
  }

  if (!movies) {
    return <p>Movie details not found.</p>;
  }

  console.log(movies);

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__navbar">
          <img src={Logo} alt="logo" className="logo" />
          <div className="navbar__search">
            <form onSubmit={handleSearch}>
              <input
                onChange={(e) => setTerm(e.target.value)}
                type="text"
                placeholder="What do you want to watch?"
                value={term}
              />{" "}
              <FaSearch onClick={handleSearch} />
            </form>
          </div>
          <div className="navbar__menu">
            <Link style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <p className="signin">Sign In</p>
            </Link>
            <img src={Menu} alt="menu" />
          </div>
        </div>

        <Hero />
      </div>

      <div className="app__featured">
        <Featured event={seeMore} />
        <div className="movies">
          {movies.map((movie, id) => {
            return <MovieCard {...movie} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
