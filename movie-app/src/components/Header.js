import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <header className="header" id="header">
      <button onClick={back}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <h1>
        <Link to="/">MOVIE-APP</Link>
      </h1>
    </header>
  );
}
