import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Login from "./pages/Login";
import TripDetails from "./pages/TripDetails";
import ListTrips from "./pages/ListTrips";
import Error404 from "./pages/Error404";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#8561c5",
        main: "#673ab7",
        dark: "#482880",
      },
      secondary: {
        light: "#4dabf5",
        main: "#2196f3",
        dark: "#1769aa",
      },
    },
  });

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin">
              <AdminHome />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/list">
              <ListTrips />
            </Route>
            <Route exact path="/details">
              <TripDetails />
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
