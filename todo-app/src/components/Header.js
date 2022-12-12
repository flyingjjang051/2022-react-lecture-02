import React from "react";

const styles = {
  header: {
    backgroundColor: "#111",
    color: "#fff",
    margin: 0,
  },
  h1: {
    fontSize: 16,
    padding: 10,
  },
};

function Header() {
  return (
    <header className="header" id="header">
      {/* 예약어 */}
      <h1>TODO LIST</h1>
    </header>
  );
}
export default Header;
