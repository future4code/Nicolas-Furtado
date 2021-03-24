import React from "react";
import styled from "styled-components";
import axios from "axios";
import Cadastro from "./Components/Cadastro";
import Cadastros from "./Components/Cadastros";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    page: "cadastros",
    nameValue: "",
    emailValue: "",
  };

  nameHandle = (e) => {
    this.setState({ nameValue: e.target.value });
  };
  emailHandle = (e) => {
    this.setState({ emailValue: e.target.value });
  };

  add = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };
    if (body.name != "" && body.email != "") {
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {
              Authorization: "nicolas-furtado-cruz",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          alert('Cadastrado com sucesso!')
          this.setState({ page: "cadastros" });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }else{
      alert('Preencha todos os campos');
    }
  };
  back = () => {
    this.setState({ page: "cadastro" });
  };

  render() {
    const page = () => {
      switch (this.state.page) {
        case "cadastro":
          return (
            <Cadastro
              add={this.add}
              nameHandle={this.nameHandle}
              emailHandle={this.emailHandle}
            />
          );
        case "cadastros":
          return <Cadastros back={this.back} />;
        default:
          return "página não encontrada";
      }
    };

    return <MainContainer>{page()}</MainContainer>;
  }
}
