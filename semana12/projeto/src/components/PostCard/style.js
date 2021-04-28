import styled from "styled-components";

export const MainContainer = styled.section`
  width: 40vw;
  min-width: 300px;
  background-color: #202020;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  padding: 20px;
  &:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 1);
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const Autor = styled.div`
`

export const Text = styled.p`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  padding: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Commentary = styled.p``;
export const VoteContainer = styled.p``;
