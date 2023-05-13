import React from "react";
import { ThemeProvider } from "styled-components";
import { auth } from "./firebase/index";
import theme from "./ui/theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
