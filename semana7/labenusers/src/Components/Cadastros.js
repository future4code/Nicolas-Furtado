import React from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export default class Cadastros extends React.Component {
  state = {
    cadastros: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "nicolas-furtado-cruz",
          },
        }
      )
      .then((res) => {
        res.data.forEach((e) => {
          this.setState({ cadastros: [...this.state.cadastros, e] });
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  deleteUser = (id, name) => {
    if (window.confirm("Deseja excluir o usuario " + name + "?")) {
      axios
        .delete(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" +
            id,
          {
            headers: {
              Authorization: "nicolas-furtado-cruz",
            },
          }
        )
        .then((res) => {
          this.setState({ cadastros: [] });
          this.getAllUsers();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  render() {
    const cadastros = this.state.cadastros.map((e) => {
      return (
        <li>
          {e.name}{" "}
          <button
            onClick={() => {
              this.deleteUser(e.id, e.name);
            }}
          >
            deletar
          </button>
        </li>
      );
    });
    return (
      <MainContainer>
        <h1>Pessoas cadastradas</h1>
        <ul>{cadastros}</ul>
        <button onClick={this.props.back}>Voltar</button>
      </MainContainer>
    );
  }
}
