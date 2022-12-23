import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";

export default function Search({ searchVideo }) {
  const inputRef = useRef();

  const onSearch = () => {
    const searchTxt = inputRef.current.value;
    searchVideo(searchTxt);
  };
  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  const onSearchClick = () => {
    onSearch();
  };
  return (
    <header className="header">
      <h1>
        <img src={Logo} width="100px" alt="youtube" />
      </h1>
      <div>
        <input type="text" ref={inputRef} onKeyDown={onSearchEnter} placeholder="search..."></input>
        <button onClick={onSearchClick}>검색</button>
      </div>
    </header>
  );
}
