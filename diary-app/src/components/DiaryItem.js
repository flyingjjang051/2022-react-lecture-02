import React from "react";
import styled from "styled-components";

export default function DiaryItem() {
  return (
    <Item>
      <Info>
        <dl>
          <dt>작성자</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>감정점수</dt>
          <dd></dd>
        </dl>
        <div>날짜뿌리기...</div>
      </Info>
      <Contents>내용이 들어갑니다.</Contents>
    </Item>
  );
}

const Item = styled.li`
  background-color: #ccc;
  padding: 15px;
  border-radius: 5px;
`;
const Info = styled.div`
  padding-bottom: 15px;
  mix-blend-mode: 15px;
  border-bottom: 1px solid #999;
`;
const Contents = styled.div``;
