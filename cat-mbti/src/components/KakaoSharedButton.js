import React, { useEffect } from "react";
import styled from "styled-components";
const { Kakao } = window;

export default function KakaoSharedButton({ data }) {
  console.log(window);
  const url = "https://aesthetic-sfogliatella-f6ad1c.netlify.app/";
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init("4aaea00d9b16ab844633eead85d9d655");
    }
  }, []);
  function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나만없어 고양이~~",
        description: `당신에게 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "나도 고양이 집사가 되고 싶다면~~",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }

  return <Button onClick={shareMessage}>카카오톡 공유하기</Button>;
}

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  font-size: 18px;
  font-family: inherit;
  margin: 0 5px;
  width: 80%;
  word-break: keep-all;
  flex-grow: 0;
  flex-shrink: 0;
  color: #000;
  margin-top: 20px;
`;
