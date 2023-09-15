import React from "react";
import Logo from "../../assets/images/Logodark.png";
import Home from "../../assets/images/Home.png";
import Calendar from "../../assets/images/Calendar.png";
import Tv from "../../assets/images/TV.png";
import Projector from "../../assets/images/Projector.png";
import Logout from "../../assets/images/Logout.png";
import "./SideNav.css";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="app__sideNav">
      <img style={{ width: "150px" }} src={Logo} alt="Logo" />
      <ul>
        <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <img src={Home} alt="home" /> Home
          </li>
        </Link>
        <li>
          <img src={Projector} alt="movies" /> Movies
        </li>
        <li>
          <img src={Tv} alt="tv" /> TV Series
        </li>
        <li>
          <img src={Calendar} alt="calendar" /> Upcoming
        </li>
      </ul>
      <div style={{ padding: "0 2rem" }}>
        <div className="dialogue">
          <p>Play movie quizes and earn free tickets</p>
          <p style={{ fontSize: "12px", margin: "5px 0" }}>
            50k people are playing now
          </p>
          <span style={{display:"flex"}}>
          <button
            style={{
              color: "#be123c",
              background: "rgba(190, 18, 60, 10%)",
              border: "none",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "12px",
              margin: "auto",
            }}
          >
            Start Playing
          </button>
          </span>
        </div>
      </div>
      <div className="logout">
        <img src={Logout} alt="out" /> Log out
      </div>
    </div>
  );
};

export default SideNav;
