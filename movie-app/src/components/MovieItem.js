import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem({ poster, title, id }) {
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="">
          <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt={title} />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
}
