import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./ui/theme";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import router from "./router";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
