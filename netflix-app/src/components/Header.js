import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/logo.png";
function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="netflix" />
      </Logo>
    </Container>
  );
}
const Container = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 50px;
  background-color: #fff;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.h1`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
`;

export default Header;
