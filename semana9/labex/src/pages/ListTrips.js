import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router";
import Header from "../components/Header";
import CandidateForm from "../components/CandidateForm";
import ListContainer from "../components/ListContainer";

const MainContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  min-height: 100vh;
  gap: 50px;
  background-image: url(${'./img/background.jpg'});
  background-size: 1000px;
  display:flex;
  flex-direction: column;
  align-items:center;
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
      <CandidateForm/>
      <ListContainer/>
    </MainContainer>
  );
};

export default ListTrips;
