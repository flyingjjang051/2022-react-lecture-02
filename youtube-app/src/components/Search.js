import React, { useRef } from "react";
import logo from "../assets/images/logo.png";
import axios from "axios";
export default function Search() {
  const inputRef = useRef();
  const search = (searchTxt) => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchTxt}&type=video&key=AIzaSyCqR8Om3ue8mVhhl9yDUUEXiG4t8Fyjpds&order=rating&regionCode=KR`)
      .then((response) => {
        //setVideos(response.data.items);
      });
  };
  return (
    <header className="header">
      <div className="container">
        <h1>
          <img src={logo} alt="마이튜브" />
        </h1>
        <div className="search">
          <input type="text" ref={inputRef} />
          <button onClick={search}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
