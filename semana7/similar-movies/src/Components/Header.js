import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export default class Header extends React.Component {

  render() {
    return (
      <MainContainer>
        <h1>Filmes similares</h1>
        <input onChange={this.props.inputHandle} placeholder='Senhor dos aneis'/>
        <button onClick={this.props.search}>Pesquisar</button>
      </MainContainer>
    );
  }
}
