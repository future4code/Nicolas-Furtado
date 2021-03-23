import React from "react";
import styled from 'styled-components';

const Label = styled.p`
  margin: 15px 0px;
`
const MainContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
`

export default class PerguntaFechada extends React.Component {
  render() {
    const opcoes = this.props.opcoes.map((opcao)=>{
      return (
        <option value={opcao}>{opcao}</option>
      );
    })
    return (
      <MainContainer>
        <Label>{this.props.label}</Label>
        <select onChange={e => this.props.preencher(e.target.value)}>
          {opcoes}
        </select>
      </MainContainer>
    );
  }
}
