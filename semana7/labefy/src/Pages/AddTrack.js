import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
  Authorization: "nicolas-furtado-cruz",
};

const MainContainer = styled.div`
  background-color: #202020;
  color: white;
  width: 500px;
  height: 300px;
  box-shadow: 5px 5px 10px black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  h2 {
    margin: 0px;
  }
  button {
    border-radius: 20px;
    padding: 10px 20px;
    outline: none;
    border: none;
    color: white;
    background-color: #cc0000;
    font-weight: bold;
    margin: 10px;
    :hover {
      cursor: pointer;
      background-color: red;
    }
  }
`;
const SubContainer = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  audio {
    width: 500px;
  }
`;

export default class AddTrack extends React.Component {
  state = {
    nameValue: "",
    artistValue: "",
    urlValue: "",
  };

  nameHandle = (e) => {
    this.setState({ nameValue: e.target.value });
  };
  artistHandle = (e) => {
    this.setState({ artistValue: e.target.value });
  };
  urlHandle = (e) => {
    this.setState({ urlValue: e.target.value });
  };

  addTrack = async () => {
    if(this.state.nameValue === '' || this.state.artistValue === '' || this.state.urlValue === ''){
      return alert('Preencha todos os campos!');
    }
    const body = {
      name:this.state.nameValue,
      artist:this.state.artistValue,
      url:this.state.urlValue,
    }
    try {
      await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`,
        body,
        { headers: headers }
      );
      alert('Música adicionada com sucesso!')
      this.props.changePage();
    } catch (err) {
      console.log(err.response);
    }
  };

  render() {
    return (
      <MainContainer>
        <h2>Nova musica</h2>
        <SubContainer>
          <label>Nome</label>
          <input onChange={this.nameHandle} value={this.state.nameValue} />
          <label>Artista</label>
          <input onChange={this.artistHandle} value={this.state.artistValue} />
          <label>Url</label>
          <input onChange={this.urlHandle} value={this.state.urlValue} />
        </SubContainer>
        <div>
          <button onClick={this.addTrack}>adicionar</button>
        </div>
      </MainContainer>
    );
  }
}
