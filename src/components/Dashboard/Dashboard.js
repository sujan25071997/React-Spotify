import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import HomePage from "../Home/Home";
import SearchPage from "../Search/Search";
import Profile from "../Profile/Profile";
import FeaturedPlayList from "../FeaturedPlayList/FeaturedPlayList";
import Logout from "../../Logout";
import Login from "../Login/Login";
import Tracks from "../Tracks/Tracks";
import MenuIcon from "@material-ui/icons/Menu";

const Dashboard = (props) => {
  const token = props.code;
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const closeSidebar = (e) => {
      if (e.view.screen.availWidth < 400) {
        if (e.path[1].tagName == "DIV") {
          setToggle(false);
        }
      }
    };

    return () => {
      document.body.addEventListener("click", closeSidebar);
    };
  }, []);

  return (
    <div className="dashboard mobile-dashbord">
      <BrowserRouter>
        <div>{toggle && <Sidebar />}</div>
        <div>
          <div
            className={`navbar tip-navbar onlyicon-sidebar ${
              toggle ? "" : "nav-inactive"
            }`}
          >
            <a
              className="btn border-0 "
              id="menu-btn"
              onClick={() => setToggle((current) => !current)}
            >
              <i className="bx bx-menu">
                <MenuIcon style={{ color: "white" }} />
              </i>
            </a>
          </div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={<HomePage toggle={toggle} token={token} />}
            />
            <Route path="/profile" element={<Profile toggle={toggle} />} />
            <Route path="/search" element={<SearchPage toggle={toggle} />} />
            <Route path="/featured-playlist" element={<FeaturedPlayList />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/tracks/:playlistId" element={<Tracks />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
