import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
export default function List({ selectedVideo }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //prettier-ignore
    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=AIzaSyDDSzNqufJMWsd5jb0CNQi-7leUxawsIxA&chart=mostPopular")
    .then((response) => {
      setVideos(response.data.items);
    });
  }, []);

  return (
    <div className="container">
      <h2>List</h2>
      <ul className="video-list">
        {videos.map((item, idx) => {
          return <VideoItem snippet={item.snippet} videoId={item.id.videoId} key={idx} selectedVideo={selectedVideo}></VideoItem>;
        })}
      </ul>
    </div>
  );
}
