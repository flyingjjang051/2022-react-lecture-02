import React from "react";
import styled from "styled-components";

function MovieItem({ title, src, desc }) {
  return (
    <Container>
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/original/${src}`} alt="" />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <div className="btns">
          <button className="play">play</button>
          <button className="more">more information</button>
        </div>
        <p>{desc}</p>
      </div>
    </Container>
  );
}
const Container = styled.li`
  height: 100vh;
  text-align: left;
  .img {
    position: relative;
    :before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .info {
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 200px;
    h2 {
      font-size: 48px;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }
    .btns {
      margin: 20px 0;
      button {
        padding: 15px;
        background-color: #fff;
        font-size: 16px;
        border-radius: 5px;
        margin-right: 5px;
        text-transform: uppercase;
        font-weight: 500;
        &.more {
          background-color: #2a51db;
          color: #fff;
        }
      }
    }
    p {
      line-height: 1.5;
      max-width: 600px;
      font-size: 18px;
      word-break: keep-all;
    }
  }
`;
export default MovieItem;
