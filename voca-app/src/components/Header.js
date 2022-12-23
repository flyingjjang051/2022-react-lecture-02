import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Wrapper>
      <h1>말해뭐해 VOCA</h1>
      <nav>
        <ul>
          <li className="day btn">
            <Link to="/insert/day">add day</Link>
          </li>
          <li className="voca btn">
            <Link to="/insert/voca">add voca</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  nav {
    position: absolute;
    right: 0;
    top: 0;
    ul {
      display: flex;
      gap: 10px;
      li {
      }
    }
  }
`;

export default Header;
