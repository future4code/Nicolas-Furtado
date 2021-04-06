import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [iconeCurtida, setIconeCurtida] = useState(iconeCoracaoBranco);
  const [numeroCurtidas, setNumeroCurtidas] = useState(8);
  const [numeroComentarios, setNumeroComentarios] = useState(2);
  const [comentando, setComentando] = useState(false);
  const [commentList, setCommentList] = useState(['linda!', 'NOSSA s2']);

  const onClickCurtida = () => {
    if(iconeCurtida === iconeCoracaoBranco){
      setNumeroCurtidas(numeroCurtidas+1);
      setIconeCurtida(iconeCoracaoPreto);
    }else if(iconeCurtida === iconeCoracaoPreto){
      setNumeroCurtidas(numeroCurtidas-1);
      setIconeCurtida(iconeCoracaoBranco);
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const enviarComentario = (comentario) => {
    if(comentario === ''){
      return alert('escreva alguma coisa antes de enviar né...')
    }
    setNumeroComentarios(numeroComentarios+1)
    setCommentList([...commentList, comentario])
  }

  return (

    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {comentando && <SecaoComentario commentList={commentList} enviarComentario={enviarComentario}/>}
    </PostContainer>
  )
}

export default Post