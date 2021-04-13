import React from "react";
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #232323;
  position: fixed;
  bottom: 0px;
  height: 50px;
  width: 100vw;
  color: white;
  display: flex;
  align-items:center;
  justify-content:flex-end;
  padding: 0px 30px;
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
  a{
    cursor: pointer;
    padding: 5px;
    color: #673ab7;
    text-decoration: none;
  }
`

const Footer = () =>{
  return (
      <MainContainer>
        Feito com ❤ por <a target={'_blanck'} href={'https://github.com/parkournick2'}>Nicolas</a>
      </MainContainer>
  );
};

export default Footer;
