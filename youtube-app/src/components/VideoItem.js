import React from "react";

export default function VideoItem({ url, title, description, selectedVideo }) {
  const onClickFunc = () => {
    console.log("click");
    selectedVideo();
  };
  return (
    <li onClick={onClickFunc}>
      <div className="img-box">
        <img src={url} alt={title} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
