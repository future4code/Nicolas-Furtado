import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";

const MainContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  button{
    margin: 10px;
    padding: 4px;
  }
`

export default class Etapa2 extends React.Component {
  state = {
    curso: '',
    unidade: ''
  }
  preencherCurso = (dado) => {
    this.setState({ curso: dado });
  };
  preencherUnidade = (dado) => {
    this.setState({ unidade: dado });
  };
  verificarForm = () => {
    if(this.state.curso !== '' && this.state.unidade !== ''){
      this.props.next(4)
    }else{
      return alert('Preencha todos os campos');
    }
  }
  render() {
    return (
      <MainContainer>
        <h1>Informações do ensino superior</h1>
        <PerguntaAberta preencher={this.preencherCurso} label='Qual curso?'/>
        <PerguntaAberta preencher={this.preencherUnidade} label='Qual unidade de ensino?'/>
        <button onClick={this.verificarForm}>Finalizar</button>
      </MainContainer>
    );
  }
}
