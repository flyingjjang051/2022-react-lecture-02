import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import List from "./List";

export default function Main() {
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    setVideoInfo({ videoId: "mgbZunbhsX0", title: "hello", description: "설명글이 들어갑니다.", channel: "fdisfudi" });
  }, []);
  const selectedVideo = (videoInfo) => {
    //setVideoInfo({ videoId: "mgbZunbhsX0", title: "hello", description: "설명글이 들어갑니다.", channel: "fdisfudi" });
    console.log("나는 VideoItem에서 전달된 obj를 Detail로 전달할 예정입니다.");
    setVideoInfo(videoInfo);
  };

  return (
    <div className="main">
      <Detail videoId={videoInfo.url} title={videoInfo.title} description={videoInfo.description}></Detail>
      <List selectedVideo={selectedVideo}></List>
    </div>
  );
}
