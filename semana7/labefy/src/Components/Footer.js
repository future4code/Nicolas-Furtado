import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  background-color: #202020;
  height: 70px;
  align-items: center;
  justify-content: center;
  color: white;
  white-space: pre;
  a {
    
    text-decoration: none;
    color: gray;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <MainContainer>
        Feito com <span>❤️</span> por <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/parkournick2"
        >
        Nicolas
        </a>
        
      </MainContainer>
    );
  }
}
