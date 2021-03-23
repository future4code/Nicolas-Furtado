import React from "react";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

import style from "styled-components";

const Container = style.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;
const Header = style.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;

`;
const Footer = style.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

`;
const ImgUser = style.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;

`;
const ImgPost = style.img`
width: 100%;
`;
class Post extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {posts: [...this.props.posts]};
  }

  onClickCurtida = (nome) => {
    const novosPosts = [...this.state.posts];
    novosPosts.forEach((post) => {
      if (post.nome === nome) {
        if (!post.curtido) {
          post.numeroCurtidas += 1;
        } else {
          post.numeroCurtidas -= 1;
        }
        post.curtido = !post.curtido;
      }
    });
    this.setState({
      posts: novosPosts,
    });
  };

  comentando = (nome, isCommenting) => {
    if (isCommenting) {
      return <SecaoComentario aoEnviar={() => this.aoEnviarComentario(nome)} />;
    }
  };

  onClickComentario = (nome) => {
    const novosPosts = [...this.state.posts];
    novosPosts.forEach((post) => {
      if (post.nome === nome) {
        post.comentando = !post.comentando;
      }
    });
    this.setState({ posts: novosPosts });
  };

  aoEnviarComentario = (nome) => {
    const novosPosts = [...this.state.posts];
    novosPosts.forEach((post) => {
      if (post.nome === nome) {
        post.numeroComentarios += 1;
        post.comentando = false;
      }
    });
    this.setState({ posts: novosPosts });
  };

  static getDerivedStateFromProps(props,state){
    //this.setState({posts: [...this.props.posts]})
    return {
      posts: [...props.posts]
    }
  }


  render() {
    const iconeCurtida = (nome) => {
      let icone;
      this.state.posts.forEach((post) => {
        if (post.nome === nome) {
          if (post.curtido) {
            icone = iconeCoracaoPreto;
          } else {
            icone = iconeCoracaoBranco;
          }
        }
      });
      return icone;
    };

    const posts = this.state.posts.map((post) => {
      return (
        <Container>
          <Header>
            <ImgUser src={post.imagemUsuario} />
            {post.nome}
          </Header>

          <ImgPost src={post.imagemPost} />

          <Footer>
            <IconeComContador
              icone={iconeCurtida(post.nome)}
              onClickIcone={() => this.onClickCurtida(post.nome)}
              valorContador={post.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={() => this.onClickComentario(post.nome)}
              valorContador={post.numeroComentarios}
            />
          </Footer>
          {this.comentando(post.nome, post.comentando)}
        </Container>
      );
    });
    return <div>{posts}</div>;
  }
}

export default Post;
