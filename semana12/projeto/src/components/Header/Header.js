import React from "react";
import { useHistory } from 'react-router-dom'
import {goToLogin, goToFeed} from '../../routes/coordinator'
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./style";

const Header = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={()=>{goToFeed(history)}} color="inherit">LabEddit</Button>
        <Button onClick={()=>{goToLogin(history)}} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
