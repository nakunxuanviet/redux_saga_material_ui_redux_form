import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#303F9F",
    secondary: "#3F51B5",
    error: "#D32F2F",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape : {
    backgroundColor: "#388E3C",
    textColor: "#FFFFFF",
    borderRadius: 4,
    borderColor: "#CCCCCC"
  }
});

export default theme;
