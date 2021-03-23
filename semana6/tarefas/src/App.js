import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Texto da tarefa",
        completa: false,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  componentDidMount() {
    localStorage.getItem("state") &&
      this.setState(JSON.parse(localStorage.getItem("state")));
    this.setState({ inputValue: '',filtro: "" });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    this.setState({ inputValue: '',tarefas: [...this.state.tarefas, novaTarefa] });
  };

  selectTarefa = (id) => {
    let novasTarefasFiltradas = this.state.tarefas.filter((tarefa)=>{
      if (tarefa.id === id && tarefa.completa) {
        return false
      }
      return true
    })
    let novasTarefas = novasTarefasFiltradas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          id: tarefa.id,
          texto: tarefa.texto,
          completa: true,
        };
      } else {
        return tarefa;
      }
    });
    console.log(novasTarefas)
    this.setState({ tarefas: novasTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
