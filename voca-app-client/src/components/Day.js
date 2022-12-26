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

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/vocas/${day}`).then((response) => {
  //     console.log(response.data);
  //     setVocas(response.data);
  //   });
  // }, []);
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:5000/vocas/${id}`);
    const response = await axios.get(`http://localhost:5000/vocas?day=${day}`);
    setVocas(response.data);
  };
  const onUpdate = async (obj) => {
    //console.log(obj);
    await axios.put(`http://localhost:5000/vocas/${obj.id}`, { ...obj, done: !obj.done });
    const response = await axios.get(`http://localhost:5000/vocas?day=${obj.day}`);
    setVocas(response.data);
  };

  return (
    <Wrapper>
      <h2>오늘 학습할 단어는...</h2>
      <ul>
        {vocas.map((item, idx) => {
          return <Voca kor={item.kor} eng={item.eng} done={item.done} id={item.id} day={item.day} onDelete={onDelete} onUpdate={onUpdate} key={item.id}></Voca>;
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
