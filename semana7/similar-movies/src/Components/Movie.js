import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 400px;
  border: 1px solid black;
  > div {
    padding: 25px;
  }
  img {
    width: 400px;
  }
`;

const imagePath = "https://image.tmdb.org/t/p/original/";

export default class Movie extends React.Component {
  render() {
    return (
      <MainContainer>
        <img alt='movie' src={imagePath + this.props.imagePath} />
        <div>
          <h3>{this.props.title}</h3>
          <p>
            {this.props.describe}
          </p>
        </div>
      </MainContainer>
    );
  }
}
