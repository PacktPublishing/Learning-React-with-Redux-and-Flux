import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = Container.extend`
  width: 70%;
`;

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

const calculateWidth = ({ width = 100 }) => `${width}%`;

export const Button = styled.button.attrs({
  type: ({ type = "button" }) => type
})`
  width: ${calculateWidth};
  background-color: forestgreen;
  color: white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: lightgray;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 2rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  border-color: ${props => (props.error ? "red" : "darkgray")};
  width: ${calculateWidth};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  width: ${calculateWidth};
`;
