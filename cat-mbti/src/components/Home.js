import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/main-cat.png";
import { useNavigate } from "react-router-dom";

// css in js

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.color || "#000"};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(24px, 5vw, 48px); // vw는 넓이의 5%
  font-weight: 700;
  margin-top: 80px;
  color: #fff;
  word-break: keep-all;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-top: 80px;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  font-size: 24px;
  color: #000;
  font-family: inherit;
  margin-top: 50px;
`;
export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header className="header" color="#ffcc33">
        나만 없어 고양이!!!
      </Header>
      <Title>내가 과연 고양이 집사가 될 관상인가?</Title>
      <LogoImage>
        <img src={LogoImg} alt="main" style={{ width: "100%" }}></img>
      </LogoImage>

      <Button
        onClick={() => {
          navigate("/question");
        }}
      >
        나에게 와줄 고양이는?
      </Button>
    </Container>
  );
}
