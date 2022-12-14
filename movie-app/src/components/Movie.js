import React from "react";

/*
export default function Movie({ title, originalTitle, releaseDate, poster }) {
  return (
    <li>
      <div className="img-box">
        <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="" />
      </div>
      <div className="info">
        <div className="title-box">
          <h3>{title}</h3>
          <p className="original-title">{originalTitle}</p>
          <p className="open-date">{releaseDate}</p>
        </div>
        <div className="overview-box">
          <p className="overview"></p>
          <p className="vote"></p>
        </div>
      </div>
    </li>
  );
}
*/
export default function Movie({ movieInfo }) {
  return (
    <li>
      <div className="img-box">
        <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} alt="" />
        <span>{movieInfo.vote_average}</span>
      </div>
      <div className="info">
        <div className="title-box">
          <h3>{movieInfo.title}</h3>
          <p className="original-title">{movieInfo.origina_title}</p>
          <p className="open-date">{movieInfo.release_date}</p>
        </div>
        <div className="overview-box">
          <p className="overview">{movieInfo.overview}</p>
          <p className="vote">{movieInfo.vote_count}</p>
        </div>
      </div>
    </li>
  );
}
