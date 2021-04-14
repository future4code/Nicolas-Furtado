import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const MainContainer = styled.div`
  padding-top: 64px;
  height: 100vh;
  width: 100vw;
  background-image: url(${"./img/background.jpg"});
  background-size: 1000px;
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
      <p>Página do adm</p>
      <Button
        onClick={() => {
          history.push("/details");
        }}
      >
        Ver detalhes
      </Button>
    </MainContainer>
  );
};

export default AdminHome;
