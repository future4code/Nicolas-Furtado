import React from "react";
import styled from "styled-components";
import axios from "axios";
import play from '../Img/play.png';

const MainContainer = styled.div`
  background-color: #202020;
  color: white;
  width: 90%;
  height: 90%;
  box-shadow: 5px 5px 10px black;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 50px;
  justify-content: center;
  div{
    border: red solid 1px;
    padding: 5px;
    height: 100px;
    width: 100px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    border-radius: 20px;
    img{
      width: 35px;
      :hover {
      cursor: pointer;
      width: 40px;
    }
    }
  }
`;

const headers = {
  Authorization: "nicolas-furtado-cruz",
};

export default class PlaylistPage extends React.Component {
  state = {
    inputValue: "",
    tracks: [],
    status: 'Carregando'
  };

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = async () => {
    try {
      const res = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`,
        { headers: headers }
      );
      this.setState({ tracks: res.data.result.tracks, status: 'Não há musicas nesse playlist' });
    } catch (err) {
      console.log(err.response);
    }
  };

  delPlaylistTrack = async () => {
    if (
      window.confirm(
        `Tem certeza que quer apagar a playlist ${this.props.playlist.name}?`
      )
    ) {
      try {
        await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}`,
          { headers: headers }
        );
        this.props.changePage();
      } catch (err) {
        console.log(err.response);
      }
    }
  };

  render() {
    const tracks = this.state.tracks.map((track) => {
      return (
        <div key={track.id}>
          {track.name}
          <img onClick={()=>this.props.selectTrack(track)} src={play}/>
        </div>
      );
    });

    return (
      <MainContainer>
        <h2>{this.props.playlist.name}</h2>
        <SubContainer>
          {this.state.tracks.length > 0 ? tracks : <p>{this.state.status}</p>}
        </SubContainer>
        <div>
          <button onClick={this.delPlaylistTrack}>Excluir</button>
          <button onClick={this.props.addTrack}>Adicionar musica</button>
        </div>
      </MainContainer>
    );
  }
}
