import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>all copyrights resrved by jjang051's media lab</p>
    </Container>
  );
}
// css in js
const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  p {
    padding: 10px 30px;
    background-color: #fff;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export default Footer;
