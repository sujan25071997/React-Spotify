import React from "react";
import { authUrl } from "../../Spotify";
import "./Login.css";

const Login = () => {
  return (
    <div
      className="login-page"
      style={{ minHight: "100vh", backgroundcolor:"black" }}
    >
      <div className="">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="Spotify-Logo"
        />
      </div>
      <div className="login-div">
      <a className="login-btn" href={authUrl}>
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
