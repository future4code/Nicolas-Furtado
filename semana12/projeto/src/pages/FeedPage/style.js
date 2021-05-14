import { Grid, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { neutralColor, highlightColor } from "../../constants/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const MainContainer = styled.section`
  min-height: 100vh;
  background-color: ${neutralColor};
  padding-top: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 20px;
`;

export const StyledGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const StyledIconButton = styled(IconButton)`
  color: ${highlightColor};
  position: fixed;
  bottom: 0px;
  right: 0px;
`;
export const StyledIcon = styled(AddCircleIcon)`
  width: 50px;
  height: 50px;
`;
