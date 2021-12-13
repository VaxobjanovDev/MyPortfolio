import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import { GlobalStyle } from "./styles/GlobalStyled";
import { darkTheme } from "./Theme.styled";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Works from "./components/Works";

const App = () => {
  return (
    <> <GlobalStyle />
          <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
         
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/works" exact component={Works} />
          
        </Routes>
      </Router></ThemeProvider>
    </>
  );
};

export default App;
