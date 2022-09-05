import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Home from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Search from "@material-ui/icons/Search";
import QueueMusic from "@material-ui/icons/QueueMusic";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Logout from "../../Logout";

const Sidebar = (props) => {
  return (
    <>
      <div className="sidebar-wrapper side-navbar active-nav d-flex flex-column">
        <img
          className="spotify-img"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt=""
        />
        <ul className="sidebar-nav ps-0 nav flex-column text-white w-100">
          <div className="sidebar-menu">
            <div>
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                <li>
                  <Home />
                  <p>Home</p>
                </li>
              </NavLink>

              <NavLink to="/profile" style={{ textDecoration: "none" }}>
                <li>
                  <AccountCircle />
                  <p>Profile</p>
                </li>
              </NavLink>

              <NavLink to="/search" style={{ textDecoration: "none" }}>
                <li>
                  <Search />
                  <p>Search</p>
                </li>
              </NavLink>

              <NavLink
                to="/featured-playlist"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <QueueMusic />
                  <p>Featured Playlist</p>
                </li>
              </NavLink>
            </div>
            <div>
              <a
                href="/"
                className="logout"
                onClick={Logout}
                style={{ textDecoration: "none" }}
              >
                <li className="logout">
                  <ExitToApp />
                  <p>Logout</p>
                </li>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
