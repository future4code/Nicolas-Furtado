import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    margin: 10px;
    padding: 4px;
  }
`;

export default class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    escolaridade: "Ensino Médio Incompleto",
  };
  preencherEscolaridade = (dado) => {
    this.setState({ escolaridade: dado });
  };
  preencherNome = (dado) => {
    this.setState({ nome: dado });
  };
  verificarForm = () => {
    if (this.state.nome !== "") {
      if(this.state.escolaridade === 'Ensino Superior Completo'){
        this.props.next(2)
      }else{
        this.props.next(3)
      }
      
    } else {
      return alert("O nome é obrigátorio");
    }
  };

  render() {
    const cursosPrincipais = [
      "Ensino Médio Incompleto",
      "Ensino Médio Completo",
      "Ensino Superior Incompleto",
      "Ensino Superior Completo",
    ];
    return (
      <MainContainer>
        <h1>Dados pessoais</h1>
        <PerguntaAberta
          preencher={this.preencherNome}
          label="Qual o seu nome?"
        />
        <PerguntaAberta label="Qual o sua idade?" />
        <PerguntaAberta label="Qual o seu email?" />
        <PerguntaFechada
          preencher={this.preencherEscolaridade}
          label="Qual a sua escolaridade?"
          opcoes={cursosPrincipais}
        />
        <button onClick={this.verificarForm}>Continuar</button>
      </MainContainer>
    );
  }
}
