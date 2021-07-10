import React from "react";
import Section from "./containers/Section";
import GlobalStyles from "./styles/GlobalStyles";
import ThemeProvider from "./styles/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Section />
    </ThemeProvider>
  );
}

export default App;
