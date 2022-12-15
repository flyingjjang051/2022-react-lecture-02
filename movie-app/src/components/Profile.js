import React from "react";
import ProfileImg from "../assets/profile.jpg";
import ProfileImgWoman from "../assets/profile-woman.jpg";
export default function Profile({ img, name, gender }) {
  console.log(gender);
  return (
    <>
      <div className="profile-img">{img ? <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={name} /> : <img src={ProfileImg} alt={name} />}</div>
      <div className="profile-info">
        <p>{name}</p>
        <p>{gender}</p>
      </div>
    </>
  );
}
