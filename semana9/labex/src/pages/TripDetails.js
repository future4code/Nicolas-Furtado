import React, {useEffect} from "react";
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

const TripDetails = () => {
  const history = useHistory();

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === ""
    ) {
      history.push("/login");
    }
  }, []);
  return (
    <MainContainer>
      <Header action={()=>{
        history.push('/admin')
      }}/>
      <p>Detalhes de uma viagem</p>
    </MainContainer>
  );
};

export default TripDetails;
