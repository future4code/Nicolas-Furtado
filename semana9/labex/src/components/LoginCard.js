import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  background-color: white;
  gap: 20px;
  @media only screen and (max-width: 900px) {
    width: 340px;
  }
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const StyledButton = styled(Button)`
  padding: 5px 20px;
`;

const LoginCard = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Title>Login</Title>
      <StyledTextField id="email" label="Email" variant="outlined" />
      <StyledTextField
        id="password"
        label="Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />

      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/admin");
        }}
      >
        entrar
      </StyledButton>
    </MainContainer>
  );
};

export default LoginCard;
