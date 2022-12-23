import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Movie from "./Movie";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  console.log(useSearchParams());
  const searchMovie = searchParams.get("movie");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios
     .get(`https://api.themoviedb.org/3/search/movie?api_key=c3531c0fd9611d97111b750a606e8fdb&language=ko-KR&page=1&query=${searchMovie}`)
     .then((response) => {
       console.log(response.data.results);
       setMovies(response.data.results);
       
     });
  }, [searchMovie]); // dependencies
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
