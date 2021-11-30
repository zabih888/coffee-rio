import { createTheme } from "@mui/material/styles";
import fontFarsi from "../../assets/fonts/Shabnam.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    info: {
      main: "#d7b46a",
    }
  },
  typography: {
    fontFamily: fontFarsi,
  },
});

export default theme;
