import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../../store";
import "./Tracks.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CLICKED_SONG, PLAYLIST } from "../../actions";
import Player from "../Player/Player";

console.log(store.getState());

const Tracks = (props) => {
  const [tracks, setTracks] = useState([]);
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const data_store = store.getState();
  const playlistArray = data_store.playlistData.playlists_data;

  useEffect(() => {
    let track_api = `https://api.spotify.com/v1/playlists/${playlistId}`;
    let token = window.localStorage.getItem("token");
    axios
      .get(track_api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setTracks(res.data.tracks.items);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("EXPIRED TOKEN!");
        }
      });
  }, []);

  const playlist = playlistArray.map((item) => {
    if (item.id == playlistId) {
      dispatch({
        type: PLAYLIST,
        payload: item,
      });
    }
  });

  const onSongClick = (event) => {
    console.log("song", event.track.album.name);
    dispatch({
      type: CLICKED_SONG,
      payload: event,
    });
  };

  const trackListItems = tracks.map((item) => (
    <div>
      <div className="">
        <a href="#" onClick={onSongClick(item)} className="track-link">
          <div className="playlist-row row">
            <div className="playlist-item col-2">
              <img
                className="track-img"
                src={item.track.album.images[0].url}
                alt=""
              />
            </div>
            <div className="playlist-item col-3">{item.track.album.name}</div>
            <div className="playlist-item col-4">
              {item.track.album.artists[0].name}
            </div>
          </div>
        </a>
      </div>
      <Player value={data_store.playlistData.clicked_song} />
    </div>
  ));

  return (
    <div className="tracks-list onlyicon-sidebar">
      <div className="playlist-container row ">
        <div className="col-4">
          <img
            className="playlist-img2"
            src={data_store.playlistData.playlist.images[0].url}
            alt="Card image cap"
          />
        </div>
        <div className="col">
          <h1 className="playlist-title2" style={{ color: "white" }}>
            {data_store.playlistData.playlist.name}
          </h1>
          <p className="card-text2 " style={{ color: "white" }}>
            A song is a single musical composition that has a melody and, often,
            words that are sung by a vocalist.
          </p>
        </div>
      </div>
      <div className="tracks-container onlyicon-sidebar">{trackListItems}</div>
      <div style={{margintop:"20vh", background:"black"}}>
      </div>
    </div>
  );
};

export default Tracks;
