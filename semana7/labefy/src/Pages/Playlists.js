import axios from "axios";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #202020;
  color: white;
  width: 90%;
  height: 90%;
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
  gap: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 50px;
  justify-content: center;
`;

const PlaylistItem = styled.div`
  border: solid white 2px;
  width: 200px;
  text-align: center;
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;
const headers = {
  Authorization: "nicolas-furtado-cruz",
};

export default class Playlists extends React.Component {
  state = {
    inputValue: "",
    playlists: [],
    status: 'Carregando'
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{headers:headers}
      );
      this.setState({playlists: res.data.result.list, status: 'Ainda não há playlists aqui :('})
    } catch (err) {
      console.log(err.data);
    }
  };

  render() {

    const playlists = this.state.playlists.map((playlist)=>{
      return <PlaylistItem onClick={() => this.props.selectPlaylist(playlist)} key={playlist.id}><p>{playlist.name}</p></PlaylistItem>
    })

    return (
      <MainContainer>
        <h2>Playlists</h2>
        <SubContainer>
          {(this.state.playlists.length !== 0) ? playlists : <p>{this.state.status}</p>}
        </SubContainer>
      </MainContainer>
    );
  }
}
