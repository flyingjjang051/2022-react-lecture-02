import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

export default function List() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=전지현&maxResults=10&key=AIzaSyBSlE37aUdzPiiWwzK7yzRuRdqgxl4WnsM")
    .then((response) => {
      console.log(response.data.items);
      setVideoList(response.data.items);
    });
  }, []);

  return (
    <div>
      {videoList.map((item, idx) => {
        //return <img src={item.snippet.thumbnails.medium.url} alt="" key={idx}></img>;
        const { title } = item.snippet;
        return <YouTube videoId={item.id.videoId} title={title}></YouTube>;
      })}
    </div>
  );
}
