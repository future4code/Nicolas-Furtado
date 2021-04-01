import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import bg from "./Img/background.jpg";
import CreatePlaylist from "./Pages/CreatePlaylist";
import Playlists from "./Pages/Playlists";
import PlaylistPage from "./Pages/PlaylistPage";
import TrackPage from "./Pages/TrackPage";
import AddTrack from "./Pages/AddTrack";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    font-family: 'Oswald', sans-serif;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url(${bg});
  background-position: center;
  background-size: 1500px;
  filter: blur(5px);
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /*background-color: pink;
  
  */
`;

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    page: "playlists",
    pageButtonText: "Criar playlists",
    playlist: {},
    track: {},
  };

  changePage = () => {
    if (this.state.page === "create-playlist") {
      this.setState({ page: "playlists", pageButtonText: "Criar playlist" });
    } else if (this.state.page === "playlists") {
      this.setState({
        page: "create-playlist",
        pageButtonText: "Ver playlists",
      });
    } else{
      this.setState({
        page: "playlists",
        pageButtonText: "Criar playlist",
      });
    }
  };

  selectPlaylist = (playlist) => {
    this.setState({
      pageButtonText: "Ver playlists",
      page: "playlist-page",
      playlist: playlist,
    });
  };
  selectTrack = (track) => {
    this.setState({
      pageButtonText: "Ver playlists",
      page: "track-page",
      track: track,
    });
  };
  addTrack = () => {
    this.setState({
      pageButtonText: "Ver playlists",
      page: "add-track",
    });
  };

  render() {
    const page = () => {
      switch (this.state.page) {
        case "create-playlist":
          return <CreatePlaylist changePage={this.changePage} />;
        case "playlists":
          return <Playlists selectPlaylist={this.selectPlaylist} />;
        case "playlist-page":
          return (
            <PlaylistPage
              selectTrack={this.selectTrack}
              addTrack={this.addTrack}
              changePage={this.changePage}
              playlist={this.state.playlist}
            />
          );
        case "track-page":
          return (
            <TrackPage
              changePage={this.changePage}
              playlist={this.state.playlist}
              track={this.state.track}
            />
          );
        case "add-track":
          return (
            <AddTrack
              changePage={this.changePage}
              playlist={this.state.playlist}
            />
          );
        default:
          break;
      }
    };

    return (
      <>
        <GlobalStyle />
        <BackgroundImage />
        <MainContainer>
          <Header
            onClick={this.changePage}
            buttonText={this.state.pageButtonText}
          />
          <SubContainer>{page()}</SubContainer>
          <Footer />
        </MainContainer>
      </>
    );
  }
}
