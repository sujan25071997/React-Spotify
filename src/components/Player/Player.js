import "./Player.css";
import { useState, useEffect } from "react";
import SkipNext from "@material-ui/icons/SkipNext";
import PlayArrow from "@material-ui/icons/PlayArrow";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import VolumeOff from "@material-ui/icons/VolumeOff";
import VolumeUp from "@material-ui/icons/VolumeUp";

const Player = (props) => {
  const [SongClicked, setSongclicked] = useState(false);
  const [songImg, setSongImg] = useState('')
  const [songName, setSongName] = useState('')
  const [songArtist, setSongArtist] = useState('')

  useEffect(() => {
    if (JSON.stringify(props.value) === "{}") {
        setSongclicked(false);
      } else {
        setSongclicked(true);
        setSongImg(props.value.track.album.images[0].url);
        setSongName(props.value.track.name);
        setSongArtist(props.value.track.album.artists[0].name);
      }
  }, [props])
  
  

  return (
    <>
      {SongClicked && (
        <div className="player">
          <div>
            <img className="profile-img" src={songImg} alt="" />
          </div>
          <div className="song-name">
            <p>{songName}</p>
            <p className="artist-name">{songArtist}</p>
          </div>
          <div className="skip-previous">
            <SkipPrevious className="player-icon" />
          </div>
          <div className="play-arrow">
            <PlayArrow className="player-icon" />
          </div>
          <div className="skip-next">
            <SkipNext className="player-icon" />
          </div>
          <div className="track-time">0:30</div>
          <div id="track">
            <div className="track">
              <div className="knob"></div>
            </div>
          </div>
          <div className="track-length-time">4:30</div>
          <div className="volume-up">
            <VolumeUp className="player-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
