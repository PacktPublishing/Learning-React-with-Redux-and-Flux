import styled, { keyframes } from "styled-components";

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const AppIntro = styled.p`
  font-size: large;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const AppLogo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;
