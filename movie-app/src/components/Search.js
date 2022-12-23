import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchMovie, setSearchMovie] = useState("");
  //const inputSearch = useRef();
  const [searchParams] = useSearchParams();
  const movie = searchParams.get("movie") || "";
  useEffect(() => {
    setSearchMovie(movie);
  }, [movie]);
  return (
    <div className="search">
      <input
        type="text"
        // ref={inputSearch}
        value={searchMovie}
        onChange={(e) => {
          setSearchMovie(e.currentTarget.value);
        }}
        placeholder="search movie..."
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            navigate({
              pathname: "/search",
              search: `?${createSearchParams({
                movie: searchMovie,
              })}`,
            });
          }
        }}
      />
      <button
        onClick={() => {
          navigate(`/search?movie=${searchMovie}`);
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
