import { Provider, defaultTheme } from "@react-native-material/core";
import React, { ReactNode } from "react";

interface iThemeProvider {
  children: ReactNode;
}

const ThemeProvider: React.FC<iThemeProvider> = ({
  children,
}: iThemeProvider) => {
  return (
    <Provider
      theme={{
        // extend the default theme
        ...defaultTheme,
        palette: {
          primary: { main: "#3369ff", on: "#fff" },
          background: { main: "#001aff", on: "#49454F" },
          secondary: { main: "#fff", on: "#ff0ad6" },
          surface: { main: "#fff", on: "#6750A4" },
          error: { main: "#ff0000", on: "#fff" },
        },
        typography: {
          ...defaultTheme.typography,
          h1: {
            color: "#6750A4",
            fontFamily: "Roboto_700Bold",
            fontSize: 56,
          },
        },
      }}
    >
      {children}
    </Provider>
  );
};

export default ThemeProvider;
