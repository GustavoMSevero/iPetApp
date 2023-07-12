import { Routes } from "./src/routes";
import ThemeProvider from "./src/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
