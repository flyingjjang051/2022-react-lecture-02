import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/question";

export default function Question() {
  const navigate = useNavigate();
  //1~3  EI판변  {id:"EI",score:0~3}
  //4~6  SN판변  {id:"SN",score:0~3}
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const total = QuestionData.length;
  const onClick = (point, type) => {
    const newScore = totalScore.map((item) => (item.id === type ? { id: item.id, score: item.score + point } : item));
    setTotalScore(newScore);
    setQuestionNo(questionNo + 1);
    if (questionNo < total - 1) {
    } else {
      navigate("/result");
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
        <Button
          onClick={() => {
            onClick(1, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answera}
          <div>{QuestionData[questionNo].type}</div>
        </Button>
        <Button
          onClick={() => {
            onClick(0, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answerb}
          <div>{QuestionData[questionNo].type}</div>
        </Button>
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
