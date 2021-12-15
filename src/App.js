import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyled";
import { darkTheme, lightTheme } from "./styles/Theme.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Works from "./components/Works";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/works" element={<Works/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
