import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Animation from "../animations/Animation";
import spacemanAnim from "../animations/datas/spaceman.json";
import Footer from "../components/Footer";

const AnimationContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 50vw;
  width: 50vw;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  height: 100vh;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction:column;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 55px;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
`;
const WelcomeContainer = styled.div`
  margin-left: 50px;
  @media only screen and (max-width: 900px) {
    margin: 0px;
    padding: 20px;
  }
`;

const Home = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <AnimationContainer>
        <Animation data={spacemanAnim} />
      </AnimationContainer>
      <WelcomeContainer>
        <Title>Bem vindo a LabeX</Title>
        <ButtonsContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("/list");
            }}
          >
            Sou usuário
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Sou administrador
          </Button>
        </ButtonsContainer>
      </WelcomeContainer>
    <Footer/>
    </MainContainer>
  );
};

export default Home;
