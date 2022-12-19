import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import List from "./List";

export default function Main() {
  const [videoInfo, setVideoInfo] = useState({});
  const [isDetail, setIsDetail] = useState(false);
  useEffect(() => {
    setVideoInfo({ videoId: "mgbZunbhsX0", title: "hello", description: "설명글이 들어갑니다.", channel: "fdisfudi" });
  }, []);
  const selectedVideo = (videoInfo) => {
    setVideoInfo({ videoId: videoInfo.videoId, title: videoInfo.snippet.title, description: videoInfo.snippet.description });
    setIsDetail(true);
  };

  return (
    <div className={"main" + (isDetail ? " detail-view" : "")}>
      {isDetail && <Detail videoId={videoInfo.videoId} title={videoInfo.title} description={videoInfo.description}></Detail>}
      <List selectedVideo={selectedVideo}></List>
    </div>
  );
}
