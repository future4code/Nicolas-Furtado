import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToFeed } from "../../routes/coordinator";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./style";

const Header = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  const login = () => {
    goToLogin(history);
  };

  const logout = () => {
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
        {auth ? (
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
