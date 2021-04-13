import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const Header = (props) => {
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowBackIcon />}
          onClick={props.action}
        >
          Voltar
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
