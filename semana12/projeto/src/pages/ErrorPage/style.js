import styled from "styled-components";
import { neutralColor } from "../../constants/colors";

export const MainContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${neutralColor};
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorImage = styled.img`
  width: 250px;
`;
