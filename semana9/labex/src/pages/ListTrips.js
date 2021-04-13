import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router";
import Header from "../components/Header";

const MainContainer = styled.div`
  padding-top: 64px;
  height: 100vh;
  width: 100vw;
  background-image: url(${'./img/background.jpg'});
  background-size: 1000px;
`

const ListTrips = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Header
        action={() => {
          history.push("/");
        }}
      />
      <p>ListTrips</p>
    </MainContainer>
  );
};

export default ListTrips;
