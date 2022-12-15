import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" id="header">
      <h1>
        <Link to="/">MOVIE-APP</Link>
      </h1>
    </header>
  );
}
