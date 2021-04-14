import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
  gap: 10px;
`;

const Header = (props) => {
  const history = useHistory();
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <IconButton
          onClick={props.action}
          color="secondary"
          aria-label="voltar"
        >
          <ArrowBackIcon />
        </IconButton>
        {props.adm && (
          <Button
            onClick={() => {
              localStorage.setItem("token", "");
              history.push("/");
            }}
            variant="outlined"
            color="secondary"
          >
            Deslogar
          </Button>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
