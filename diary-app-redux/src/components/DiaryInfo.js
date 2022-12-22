import React from "react";
import styled from "styled-components";

export default function DiaryInfo({ total, good, bad, percent }) {
  return (
    <Info>
      <ul>
        <li>
          <dl>
            <dt>전체 일기</dt>
            <dd>{total}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>기분이 좋았던 날 일기</dt>
            <dd>{good}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>기분이 나빴던 날 일기</dt>
            <dd>{bad}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>기분이 좋았던 날 비율</dt>
            <dd>{percent}%</dd>
          </dl>
        </li>
      </ul>
    </Info>
  );
}

const Info = styled.div`
  margin: 20px;
  border-bottom: 1px solid #999;
  padding-bottom: 10px;
  ul {
    display: flex;
    flex-direction: column;
    li {
      dl {
        display: flex;
        align-items: center;
        dt {
          color: #999;
        }
        dd {
          font-size: 24px;
          :before {
            content: ":";
            display: inline-block;
            padding: 0 10px;
          }
        }
      }
    }
  }
`;
