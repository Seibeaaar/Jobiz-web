import React from "react";
import Logo from "src/assets/images/Logo.png";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

const AnimatedLogo = styled.img`
  width: 100px;
  height: 100px;
  @keyframes pulse {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.7, 0.7);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    75% {
      transform: scale(0.7, 0.7);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const Loader = () => (
  <Container>
    <AnimatedLogo src={Logo} alt="Animted logo loader" />
  </Container>
);

export default Loader;
