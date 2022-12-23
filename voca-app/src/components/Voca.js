import React from "react";
import styled from "styled-components";

function Voca({ kor, eng, id, day, done }) {
  return (
    <Item className={done ? "done" : ""}>
      <div className="check">
        <input type="checkbox" name="" id="" checked />
      </div>
      <div className="word">
        <span className="kor">{kor}</span>
        <span className="eng">{eng}</span>
      </div>
      <div className="btns">
        <button className="del">del</button>
        <button className="hint">hint</button>
      </div>
    </Item>
  );
}
const Item = styled.li`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
  .word {
    display: flex;
    span {
      margin-left: 20px;
    }
  }
  .btns {
    margin-left: auto;
    button {
      border: none;
      outline: none;
      padding: 15px 20px;
      border-radius: 5px;
      font-family: inherit;
      font-size: 16px;
      color: #fff;
      margin: 0 5px;
      text-transform: uppercase;
      &.del {
        background-color: #f00;
      }
      &.hint {
        background-color: #00f;
      }
    }
  }
  &.done {
    background-color: rgba(255, 255, 255, 0.5);
    .word {
      opacity: 0.5;
    }
  }
`;

export default Voca;
