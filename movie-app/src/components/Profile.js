import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/profile.jpg";
import ProfileImgWoman from "../assets/profile-woman.jpg";
export default function Profile({ img, name, gender, id }) {
  console.log(gender);
  return (
    <>
      <Link to={`/profile/${id}`}>
        <div className="profile-img">
          {img ? <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={name} /> : gender === 1 ? <img src={ProfileImgWoman} alt={name} /> : <img src={ProfileImg} alt={name} />}
        </div>
        <div className="profile-info">
          <p>{name}</p>
          {/* <p>{gender}</p> */}
        </div>
      </Link>
    </>
  );
}
