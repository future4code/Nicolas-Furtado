import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ListContainer from "../components/ListContainer";
import CreateTripForm from "../components/CreateTripForm";

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
`;

const AdminHome = () => {
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
      <Header
        adm={true}
        action={() => {
          history.push("/");
        }}
      />
      <CreateTripForm/>
      <ListContainer details/>
    </MainContainer>
  );
};

export default AdminHome;
