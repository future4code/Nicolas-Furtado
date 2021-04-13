import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import LoginCard from "../components/LoginCard";

const MainContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top: 64px;
  height: 100vh;
  width: 100vw;
  background-image: url(${'./img/background.jpg'});
  background-size: 1000px;
`

const Login = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Header
        action={() => {
          history.push("/");
        }}
      />
      <LoginCard />
    </MainContainer>
  );
};

export default Login;
