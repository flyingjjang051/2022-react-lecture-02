import React, { useRef, useState } from "react";
import logo from "../assets/images/logo.png";
export default function Search({ onSearch, showMain }) {
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const onClick = () => {
    onSearch(search);
  };
  const onKeyDown = () => {
    onSearch(search);
  };
  return (
    <header className="header">
      <div className="container">
        <h1
          onClick={() => {
            showMain();
            inputRef.current.value = "";
          }}
        >
          <img src={logo} alt="마이튜브" />
        </h1>
        <div className="search">
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              console.log(search);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onKeyDown();
              }
            }}
          />
          <button onClick={onClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
