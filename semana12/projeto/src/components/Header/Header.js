import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToFeed } from "../../routes/coordinator";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./style";

const Header = (props) => {
  const history = useHistory();
  

  const login = () => {
    goToLogin(history);
  };

  const logout = () => {
    localStorage.removeItem('token')
    props.setAuth(false);
    goToLogin(history);
  };


  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Button
          onClick={() => {
            goToFeed(history);
          }}
          color="inherit"
        >
          LabEddit
        </Button>
        {props.auth ? (
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        ) : (
          <Button onClick={login} color="inherit">
            Login
          </Button>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;