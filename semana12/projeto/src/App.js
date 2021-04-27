import React, { useState } from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState(token);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header setAuth={setAuth} auth={auth} />
        <Router setAuth={setAuth}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
