import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./ui/theme";
import { useTranslation } from "react-i18next";
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const App = () => {
  const { t, ready } = useTranslation();
  console.log(ready);
  return (
    <ThemeProvider theme={theme}>
      <Container>{t("auth.login.title")}</Container>
    </ThemeProvider>
  );
};

export default App;
