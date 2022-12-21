import React from "react";
import styled from "styled-components";

export default function DiaryItem({ author, contents, emotion, date }) {
  return (
    <Item>
      <Info>
        <div className="author-box">
          <dl>
            <dt>작성자</dt>
            <dd>{author}</dd>
          </dl>
          <dl>
            <dt>감정점수</dt>
            <dd>{emotion}</dd>
          </dl>
        </div>
        <div className="date">{new Date(date).toLocaleString()}</div>
      </Info>
      <Contents>{contents}</Contents>
    </Item>
  );
}

const Item = styled.li`
  background-color: #ccc;
  padding: 15px;
  border-radius: 5px;
  margin-top: 15px;
`;
const Info = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #999;
  .author-box {
    display: flex;
  }
  dl {
    display: flex;
    :before {
      content: "/";
      display: inline-block;
      padding: 0 10px;
    }
    :nth-child(1):before {
      display: none;
    }
    dd {
      margin-left: 0;
      :before {
        content: ":";
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
  .date {
    text-align: left;
  }
`;
const Contents = styled.div`
  margin-top: 15px;
  text-align: left;
`;
