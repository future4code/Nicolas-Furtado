import React from "react";
import styled from "styled-components";
import "./App.css";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Etapa4 from "./Components/Etapa4";

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    page: 1,
  };

  irPara = (dado) => {
    this.setState({page: dado})
  }

  render() {
    const page = () => {
      switch (this.state.page) {
        case 1:
          return <Etapa1 next={this.irPara}/>;
        case 2:
          return <Etapa2 next={this.irPara}/>;
        case 3:
          return <Etapa3 next={this.irPara}/>;
        case 4:
          return <Etapa4 />;

        default:
          return 'Algo inesperado aconteceu, tente novamente mais tarde!';
      }
    };
    return (
      <MainContainer>
        {page()}
      </MainContainer>
    );
  }
}
