import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
export default function List({ selectedVideo }) {
  const [videos, setVideos] = useState([]);
  console.log(process.env.REACT_APP_YOUTUBE_KEY);
  useEffect(() => {
    //prettier-ignore
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=30&type=video&key=AIzaSyCqR8Om3ue8mVhhl9yDUUEXiG4t8Fyjpds&chart=mostPopular&regionCode=KR`)
    .then((response) => {
      setVideos(response.data.items);
    });
  }, []);

  return (
    <div className="container">
      <ul className="video-list">
        {videos.map((item, idx) => {
          return <VideoItem snippet={item.snippet} videoId={item.id.videoId} key={idx} selectedVideo={selectedVideo}></VideoItem>;
        })}
      </ul>
    </div>
  );
}
