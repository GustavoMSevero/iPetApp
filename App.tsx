import "./App.css";

import Routes from "./routes";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppProvider from "./context";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <RouterProvider router={Routes} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
