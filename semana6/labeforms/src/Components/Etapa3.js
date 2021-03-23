import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from './PerguntaFechada'

const MainContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  button{
    margin: 10px;
    padding: 4px;
  }
`

export default class Etapa3 extends React.Component {
  state = {
    motivo: '',
  }
  preencherMotivo = (dado) => {
    this.setState({ motivo: dado });
  };
  verificarForm = () => {
    if(this.state.motivo !== ''){
      this.props.next(4)
    }else{
      return alert('Preencha todos os campos');
    }
  }
  render() {
    const cursosComplementares = ['Cursos de inglês', 'Curso técnico', 'Não fiz curso algum']
    return (
      <MainContainer>
        <h1>Informações do ensino superior</h1>
        <PerguntaAberta preencher={this.preencherMotivo} label='Porque você não terminou o curso de graduação?'/>
        <PerguntaFechada opcoes={cursosComplementares} label='Você algum curso complementar?'/>
        <button onClick={this.verificarForm}>Finalizar</button>
      </MainContainer>
    );
  }
}
