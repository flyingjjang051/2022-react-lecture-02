import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Voca from "./Voca";

function Day() {
  const { day } = useParams();
  const [vocas, setVocas] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/vocas?day=${day}`).then((response) => {
      console.log(response.data);
      setVocas(response.data);
    });
  }, []);
  return (
    <Wrapper>
      <h2>오늘 학습할 단어는...</h2>
      <ul>
        {vocas.map((item, idx) => {
          return <Voca kor={item.kor} eng={item.eng} done={item.done} id={item.id} day={item.day}></Voca>;
        })}
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 100px 0;
  h2 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 50px;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    gap: 10px;
  }
`;

export default Day;
