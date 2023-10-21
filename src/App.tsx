import { ThemeProvider } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography component="h1">Buttons</Typography>
        <Stack direction="row" gap={1}>
          <Button variant="text" color="primary">
            text default
          </Button>
          <Button variant="outlined" color="salmon">
            Outline
          </Button>
          <Button variant="contained" color="salmon">
            Contained
          </Button>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
