import React from "react";
import styled from "styled-components";
import axios from 'axios';

const headers = {
  Authorization: "nicolas-furtado-cruz",
};

const MainContainer = styled.div`
  background-color: #202020;
  color: white;
  width: 400px;
  height: 200px;
  box-shadow: 5px 5px 10px black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SubContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input{
    margin-bottom: 20px;
  }
  button{
    border-radius: 20px;
    padding: 10px 20px;
    outline:none;
    border: none;
    color: white;
    background-color: #CC0000;
    font-weight: bold;
    :hover{
      cursor: pointer;
      background-color: red;
    } 
  }
`;

export default class CreatePlaylist extends React.Component {

  state = {
    inputValue: '',
  }

  inputHandle = (e) =>{
    this.setState({inputValue: e.target.value})
  }

  createPlaylist = async () =>{
    if(this.state.inputValue === ''){
      return alert('Digite algum nome!')
    }
    try{
      const body = {
        name: this.state.inputValue
      }
      await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {headers: headers})
      alert('Playlist criada com sucesso!');
      this.props.changePage();
    }catch(err){
      if(err.response.status === 400){
        alert('Já tem um playlist com esse nome!')
      }
    }
  }

  render() {
    return (
      <MainContainer>
        <h2>Criar playlist</h2>
        <SubContainer>
          <label>Nome da playlist</label>
          <input onChange={this.inputHandle} value={this.state.inputValue}/>
          <button onClick={this.createPlaylist}>Criar</button>
        </SubContainer>
      </MainContainer>
    );
  }
}
