import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor, highlightColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#000",
    },
    secondary: {
      main: highlightColor,
    },
    background: {
      default: neutralColor,
    },
  },
});

export default theme;
