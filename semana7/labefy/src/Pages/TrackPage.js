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
  height: 250px;
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

export default class TrackPage extends React.Component {

  delTrack = async () => {
    if (
      window.confirm(
        `Tem certeza que quer apagar a musica ${this.props.track.name} da playlist ${this.props.playlist.name}`
      )
    ) {
      try {
        await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks/${this.props.track.id}`,
          { headers: headers }
        );
        this.props.changePage();
      } catch (err) {
        console.log(err.response);
      }
    }
  };

  render() {
    return (
      <MainContainer>
        <h2>{this.props.track.name}</h2>
        <p>{this.props.track.artist}</p>
        <SubContainer>
          <audio controls>
            <source
              src={this.props.track.url}
              type="audio/mpeg"
            />
          </audio>
        </SubContainer>
        <div>
          <button onClick={this.delTrack}>Excluir musica</button>
        </div>
      </MainContainer>
    );
  }
}
