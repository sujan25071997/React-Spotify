import "./Home.css";
import Card from "../Card/Card";
import Notifications from "@material-ui/icons/Notifications";
import store from "../../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PLAYLIST_DATA, ACCESS_TOKEN_ERROR } from "../../actions";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const toggle = props.toggle;
  const token = props.token;
  const data_store = store.getState();
  //   const playlistItems = data_store.playlistData.playlists_data;
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    const playlist_api = "https://api.spotify.com/v1/me/playlists";
    axios
      .get(playlist_api, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatch({
          type: PLAYLIST_DATA,
          payload: response.data.items,
        });
        setPlaylistItems(response.data.items);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("EXPIRED TOKEN!");
          dispatch({ type: ACCESS_TOKEN_ERROR, payload: false });
        } else {
          throw error;
        }
      });
  }, []);

  const listItems = playlistItems.map((item) => (
    <div className=" playlist-card col-md col-fs">
      <Card key={item.id.toString()} value={item} />
    </div>
  ));

  return (
    <div
      className={`home-page onlyicon-sidebar ${toggle ? "" : "nav-inactive"}`}
    >
      <div className="header-bar">
        <div className="header-message">
          <p className="heading">Good Evening!</p>
        </div>
        <div className="notification-area">
          <Notifications className="notification-icon" toggle={toggle} />
        </div>
        <div className="top-profile-div">
          <img
            className="top-profile"
            src={data_store.userProfile.userData.imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="row-container row">{listItems}</div>
    </div>
  );
};

export default HomePage;
