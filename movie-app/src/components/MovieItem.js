import React from "react";
import { Link } from "react-router-dom";
import NoImg from "../assets/noimage.jpg";

export default function MovieItem({ poster, title, id }) {
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="movie-img">{poster ? <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt={title} /> : <img src={NoImg} alt={title} />}</div>
        <div className="movie-info">
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
}
