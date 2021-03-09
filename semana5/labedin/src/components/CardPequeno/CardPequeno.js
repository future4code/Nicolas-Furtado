import React from  'react';
import './CardPequeno.css';

export default class CardPequeno extends React.Component {
  render(){
    return (
      <div className='CardPequeno'>
        <img src={this.props.imagem}/>
        <h5>{this.props.texto}</h5>
        {': '+this.props.descricao}
      </div>
    );
  }
}