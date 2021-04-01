import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display:flex;
  background-color: #202020;
  color: white;
  height: 100px;
  align-items:center;
  justify-content:center;
  position: relative;
  box-shadow: 5px 5px 10px black;

  button{
    position:absolute;
    right: 0px;
    margin-right: 20px;
    border-radius: 20px;
    padding: 10px 20px;
    outline:none;
    border: none;
    color: white;
    background-color: #CC0000;
    font-weight: bold;
    :hover{
      cursor: pointer;
      background-color: red;
    } 
  }
  @media only screen and (max-width: 500px){
    height: 120px;
    flex-direction:column;
    button{
      position:initial;
      margin:0px;
    }
    h1{
      margin: 0px;
    }
  }
`;

export default class Header extends React.Component {

  render() {
    return (
        <MainContainer>
          <h1>Labefy</h1>
          <button onClick={this.props.onClick}>{this.props.buttonText}</button>
        </MainContainer>
    );
  }
}
