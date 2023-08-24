import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const materialTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={materialTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
