import Movie from "./Movie";

import React, { useState, useEffect } from "react";
import axios from "axios";
export default function List() {
  // 화면을 렌더링할때는 useState
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=c3531c0fd9611d97111b750a606e8fdb&language=ko-KR&page=1")
    .then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
      
    });
  }, []); // dependencies
  return (
    <div className="container">
      <h2>
        <strong>popular</strong> movie
      </h2>
      <ul className="movie-list">
        {movies.map((item, idx) => {
          // return <Movie title={item.title} originalTitle={item.original_title} releaseDate={item.release_date} poster={item.poster_path} key={idx}  />;
          return <Movie movieInfo={item} key={idx} />;
        })}
      </ul>
    </div>
  );
}
