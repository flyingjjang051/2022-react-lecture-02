import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
          return (
            <li key={item.id}>
              <div className="check">
                <input type="checkbox" name="" id="" />
              </div>
              <div className="kor">{item.kor}</div>
              <div className="eng">{item.eng}</div>
              <div>
                <button>del</button>
                <button>hint</button>
              </div>
            </li>
          );
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
    gap: 10px;
    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #111;
        color: #fff;
        border-radius: 100px;
        padding: 20px 40px;
        text-transform: uppercase;
      }
    }
  }
`;

export default Day;
