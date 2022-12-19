import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
export default function List({ selectedVideo }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //prettier-ignore
    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=AIzaSyBSlE37aUdzPiiWwzK7yzRuRdqgxl4WnsM&chart=mostPopular")
    .then((response) => {
      console.log(response.data);
      setVideos(response.data.items);
      console.log(videos);
    });
  }, []);

  return (
    <div className="container">
      <h2>List</h2>
      <ul className="video-list">
        {videos.map((item, idx) => {
          return <VideoItem url={item.snippet.thumbnails.high.url} title={item.snippet.title} description={item.snippet.description} key={idx} selectedVideo={selectedVideo}></VideoItem>;
        })}
      </ul>
    </div>
  );
}
