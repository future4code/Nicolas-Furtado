import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export default class Cadastro extends React.Component {
  

  render() {
    return (
      <MainContainer>
        <h1>Cadastre-se</h1>
        <div>
          <label>Nome - </label>
          <input onChange={this.props.nameHandle}/>
        </div>
        <div>
          <label>Email - </label>
          <input onChange={this.props.emailHandle}/>
        </div>
        <button onClick={this.props.add}>Adicionar</button>
      </MainContainer>
    );
  }
}
