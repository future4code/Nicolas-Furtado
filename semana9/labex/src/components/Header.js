import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const Header = (props) => {
  return (
    <AppBar position='fixed'>
      <StyledToolbar>
      <IconButton onClick={props.action} color='secondary' aria-label="voltar">
        <ArrowBackIcon />
      </IconButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
