import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/question";

export default function Question() {
  const [questionNo, setQuestionNo] = useState(0);
  //console.log(QuestionData[questionNo].title);
  const total = QuestionData.length;
  const onClick = () => {
    if (questionNo < total - 1) {
      setQuestionNo(questionNo + 1);
    } else {
    }
  };
  return (
    <Container>
      <Header className="header" color="#ffcc33">
        Question
      </Header>

      <Progress>
        <div className="inner">
          <div className="bar" style={{ width: `${(questionNo / 12) * 100}%` }}></div>
        </div>
      </Progress>

      <Title>{QuestionData[questionNo].title}</Title>

      <Buttons>
        <Button onClick={onClick}>{QuestionData[questionNo].answera}</Button>
        <Button onClick={onClick}>{QuestionData[questionNo].answerb}</Button>
      </Buttons>
    </Container>
  );
}

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
  font-size: clamp(16px, 3vw, 24px); // vw는 넓이의 5%
  font-weight: 700;
  margin-top: 80px;
  color: #fff;
  word-break: keep-all;
  padding: 0 20px;
  line-height: 1.5;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  font-size: 18px;
  color: #000;
  font-family: inherit;
  margin: 0 5px;
  width: calc(50% - 10px);
  word-break: keep-all;
  flex-grow: 0;
  flex-shrink: 0;
`;
const Progress = styled.div`
  padding: 0 20px;
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
  .inner {
    width: 100%;
    height: 15px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    .bar {
      background-color: #f00;
      height: 100%;
      transition: all 0.25s ease;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;
