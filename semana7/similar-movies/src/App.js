import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Components/Header.js";
import Movie from "./Components/Movie.js";
import axios from "axios";

const API_KEY = "24ad55261db93516fb62710959037f91";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    font-family:sans-serif
  }
`;

const MainContainer = styled.div` 
  text-align:center;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  gap: 50px;
  padding: 50px;
`

export default class App extends React.Component {
  state = {
    query: "",
    movie: { title: "", id: 0 },
    similarMovies: [],
  };

  componentDidMount() {}

  getMovie = async () => {
    if(this.state.query === ''){
      return alert('Escreva o nome do filme')
    }
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${this.state.query}&include_adult=false`;
    try {
      const res = await axios.get(endpoint);
      const movie = {
        id: res.data.results[0].id,
        title: res.data.results[0].title,
      };
      this.setState({ movie: movie });
    } catch (err) {
      alert('Filme não encontrado')
      this.setState({movie: { title: "", id: 0 }});
    }
    this.getSimilarMovies();
  };

  getSimilarMovies = async () => {
  const endpoint = `https://api.themoviedb.org/3/movie/${this.state.movie.id}/similar?api_key=24ad55261db93516fb62710959037f91&language=pt-BR&page=1`
    try {
      const res = await axios.get(endpoint);
      this.setState({similarMovies : res.data.results})
      console.log(res.data.results)
    } catch (err) {
      
    }
  };


  inputHandle = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {

    const similarMovies = this.state.similarMovies.map((movie)=>{
      return <Movie key={movie.id} title={movie.title} describe={movie.overview} imagePath={movie.backdrop_path}/>
    })

    return (
      <>
        <GlobalStyle />
        <MainContainer>
          <Header search={this.getMovie} inputHandle={this.inputHandle} />
          {(this.state.movie.title !== '') && <p>Exibindo similares de {this.state.movie.title}</p>}
          <MoviesContainer>
            {(this.state.similarMovies.length !== 0) ? similarMovies : (this.state.movie.title !== '' && <div>Nenhum filme similar</div>)}
          </MoviesContainer>
        </MainContainer>
      </>
    );
  }
}
