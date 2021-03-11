import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Nicolas" 
          descricao="Oi, eu sou o Nicolas. Sou O programador, com 'o' maiúsculo. Adoro enviar e-mails na sexta-feira e esperar o Astro-dev responder com uma bronca e me dar mais trabalho."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          texto='Email'
          imagem='https://www.flaticon.com/svg/vstatic/svg/747/747314.svg?token=exp=1615303830~hmac=495cb0b0311a1d0b166390ae1a423ec5'
          descricao='nicolasalexandre0001@gmail.com'
        />
        <CardPequeno
          texto='Endereço'
          imagem='https://www.flaticon.com/svg/vstatic/svg/73/73364.svg?token=exp=1615303959~hmac=87f44a576b2bfe489bfa52270552c51c'
          descricao='Rua paraiso'
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Fui contratado a mando de um dos fundadores: 'Temos que engajar no potencial desse menino.'" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Engenheiro chefe no setor de inteligência artificial." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
