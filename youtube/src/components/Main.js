import axios from "axios";
import React, { useCallback, useEffect } from "react";
import List from "./List";
import Search from "./Search";

export default function Main() {
  useEffect(() => {}, []);
  const searchVideo = (searchTxt) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchTxt}&maxResults=10&key=AIzaSyBSlE37aUdzPiiWwzK7yzRuRdqgxl4WnsM`).then((response) => {
      console.log(response.data.items);
    });
  };

  return (
    <>
      <Search searchVideo={searchVideo}></Search>
      {/* <List></List> */}
    </>
  );
}
