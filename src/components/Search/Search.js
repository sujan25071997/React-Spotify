import "./Search.css";
import axios from "axios";
import { useState } from "react";
import Search from "@material-ui/icons/Search";

const SearchPage = (props) => {
  const toggle = props.toggle;
  const [searchKey, setSearchKey] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setSearchKey(event.target.value);

    console.log("value is:", event.target.value);
    const search_api = "https://api.spotify.com/v1/search";
    let token = window.localStorage.getItem("token");

    axios
      .get(search_api, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          q: searchKey,
          type: "track",
        },
      })
      .then((response) => {
        setItems(response.data.tracks.items);
      });
  };
  const searchItems = items.map((item) => (
    <div className="search-item col-3">
      <a href="#">
        <img className="search-img" src={item.album.images[0].url} alt="" />
      </a>
      <h5>{item.album.name}</h5>
    </div>
  ));

  return (
    <div
      className={`search-page onlyicon-sidebar ${
        toggle ? "" : "nav-inactive-search"
      }`}
    >
      <div className="searchbar">
        <Search className="search-icon" />
        <input
          className="search_input"
          type="text"
          name=""
          placeholder="Search for artists, music and genres..."
          onChange={handleChange}
          value={searchKey}
        />
      </div>
      <div className="row search-results ">{searchItems}</div>
    </div>
  );
};

export default SearchPage;
