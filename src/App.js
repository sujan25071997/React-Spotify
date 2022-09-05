import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { PLAYLIST_DATA, ACCESS_TOKEN_ERROR, PROFILE_DATA } from "./actions";
import axios from "axios";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);

    // const playlist_api = "https://api.spotify.com/v1/me/playlists";
    // axios
    //   .get(playlist_api, { headers: { Authorization: `Bearer ${token}` } })
    //   .then((response) => {
    //     dispatch({
    //       type: PLAYLIST_DATA,
    //       payload: response.data.items,
    //     });
        
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 401) {
    //       console.log("EXPIRED TOKEN!");
    //       dispatch({ type: ACCESS_TOKEN_ERROR, payload: false });
    //     } else {
    //       throw error;
    //     }
    //   });

    const profile_api = "https://api.spotify.com/v1/me";
    axios
      .get(profile_api, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatch({
          type: PROFILE_DATA,
          payload: {
            imageUrl: response.data.images[0].url,
            name: response.data.display_name,
          },
        });
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("EXPIRED TOKEN!");
          dispatch({ type: ACCESS_TOKEN_ERROR, payload: false });
        }
      });
  }, []);

  return (
    <div className="app">{token ? <Dashboard code={token} /> : <Login />}</div>
  );
};

export default App;
