import { TextField } from "@material-ui/core";
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

export const StyledForm = styled.form`
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const StyledTextField = styled(TextField)`
  width: 300px;
`;
