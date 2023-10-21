import { createTheme } from "@mui/material/styles";
import { red, yellow, green } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    salmon: Palette["primary"];
  }

  interface PaletteOptions {
    salmon?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    salmon: true;
  }
}

// define the theme
let theme = createTheme({
  palette: {
    mode: "light",
  },
});

theme = createTheme(theme, {
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: "#FF5733",
      },
      name: "salmon",
    }),
  },
});

export { theme };
