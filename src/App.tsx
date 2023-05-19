import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./ui/theme";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import router from "./router";
import AuthProvider from "./firebase/auth";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
