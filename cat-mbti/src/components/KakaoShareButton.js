import React, { useEffect } from "react";
import styled from "styled-components";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "ihavenotcat.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init("4aaea00d9b16ab844633eead85d9d655");
    }
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나만 없어 고양이 ㅠㅠ",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
};
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
export default KakaoShareButton;

