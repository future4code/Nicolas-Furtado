import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const StyledButton = styled(Button)`
  padding: 5px 20px;
`;

const LoginCard = () => {
  const history = useHistory();
  const [email, setEmail] = useState("astrodev@gmail.com.br");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/admin");
    }
  }, []);

  const handle = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const login = () => {
    const body = {
      email,
      password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("logado com sucesso!");
        history.push("/admin");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <MainContainer>
      <Title>Login</Title>
      <StyledTextField
        onChange={handle}
        value={email}
        id="email"
        label="Email"
        variant="outlined"
      />
      <StyledTextField
        onChange={handle}
        value={password}
        id="password"
        label="Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />

      <StyledButton variant="contained" color="primary" onClick={login}>
        entrar
      </StyledButton>
    </MainContainer>
  );
};

export default LoginCard;
