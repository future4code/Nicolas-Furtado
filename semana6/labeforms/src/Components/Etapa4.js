import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
`

export default class Etapa4 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>Obrigado, Entraremos em contato!</h1>
      </MainContainer>
    );
  }
}
