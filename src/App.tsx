import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./ui/theme";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>Hello Jobiz</Container>
  </ThemeProvider>
);

export default App;
