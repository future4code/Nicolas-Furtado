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

export default class PerguntaAberta extends React.Component {

  inputHandle = (event) => {
    this.props.preencher && this.props.preencher(event.target.value);
  }
  render() {
    return (
      <MainContainer>
        <Label>{this.props.label}</Label>
        <input onChange={this.inputHandle} type='text'/>
      </MainContainer>
    );
  }
}
