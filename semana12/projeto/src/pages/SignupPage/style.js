import styled from "styled-components";
import { neutralColor } from "../../constants/colors";
import { TextField } from "@material-ui/core";

export const MainContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${neutralColor};
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  box-shadow: 2px 2px 8px  rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 400px;
`;

export const UserImage = styled.img`
  width: 250px;
`;

export const StyledTextField = styled(TextField)`
  width: 300px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
