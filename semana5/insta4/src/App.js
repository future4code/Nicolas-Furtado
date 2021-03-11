import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Paulinha",
        imagemUsuario: "https://picsum.photos/50/50?random=1",
        imagemPost: "https://picsum.photos/200/150?random=1",
        curtido: true,
        numeroCurtidas: 22,
        comentando: false,
        numeroComentarios: 0,
      },
      {
        nome: "Nicolas",
        imagemUsuario: "https://picsum.photos/50/50?random=2",
        imagemPost: "https://picsum.photos/200/150?random=2",
        curtido: false,
        numeroCurtidas: 7,
        comentando: false,
        numeroComentarios: 0,
      },
    ],
    inputNome: "",
    inputImgUser: "",
    inputImgPost: "",
  };

  
  nomeHandle = (event) => {
    this.setState({
      inputNome: event.target.value,
    });
  };
  imgUserHandle = (event) => {
    this.setState({
      inputImgUser: event.target.value,
    });
  };
  imgPostHandle = (event) => {
    this.setState({
      inputImgPost: event.target.value,
    });
  };

  addPost = () => {
    const novosPosts = [
      ...this.state.posts,
      {
        nome: this.state.inputNome,
        imagemUsuario: this.state.inputImgUser,
        imagemPost: this.state.inputImgPost,
        curtido: false,
        numeroCurtidas: 0,
        comentando: false,
        numeroComentarios: 0,
      },
    ];
    this.setState({
      posts: novosPosts,
      inputNome: "",
      inputImgUser: "",
      inputImgPost: "",
    });
  };

  render() {
    return (
      <div className={"app-container"}>
        <Post posts={this.state.posts} />
        <input
          onChange={this.nomeHandle}
          value={this.state.inputNome}
          placeholder="Nome"
        />
        <input
          onChange={this.imgUserHandle}
          value={this.state.inputImgUser}
          placeholder="Link da imagem do usuario"
        />
        <input
          onChange={this.imgPostHandle}
          value={this.state.inputImgPost}
          placeholder="Link da imagem do post"
        />
        <button onClick={this.addPost}>Enviar</button>
      </div>
    );
  }
}
export default App;
