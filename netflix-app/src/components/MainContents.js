import React from "react";
import Rows from "./Rows";
import requests from "../api/requests";
function MainContents() {
  return (
    <>
      <Rows title="netflix original" fetchURL={requests.fetchNetflixOriginals} type="banner" showNum="3"></Rows>
      <Rows title="top rated" fetchURL={requests.fetchTopRated} type="banner"></Rows>
      <Rows title="popular movie" fetchURL={requests.fetchPopular} type="banner"></Rows>
    </>
  );
}

export default MainContents;
