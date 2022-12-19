import React from "react";

export default function Detail({ videoId, title, channel, description }) {
  return (
    <div className="detail">
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <h2>{title}</h2>
      <h2>{channel}</h2>
      <h2>{description}</h2>
    </div>
  );
}
