import "./Profile.css";
import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";
import store from "../../store";


const Profile = (props) => {
  const toggle = props.toggle;
  const data_store = store.getState();

  return (
    <div className={`profilePage onlyicon-sidebar ${toggle ? "" : "nav-inactive-profile"}`}>
      <div>
        <h1>Profile</h1>
      </div>
      <div className="profile-container row" >
        <div className="col">
          <img
            className="profile-image"
            src={data_store.userProfile.userData.imageUrl}
            alt=""
          />
        </div>
        <div className="col display-name" >
          <h2>{data_store.userProfile.userData.name}</h2>
          <h3>sujan.chhetri@gmail.com</h3>
          <a href="https://www.spotify.com/">
            <button type="button" className="spotify-btn">
              Open in spotify <LaunchIcon />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
