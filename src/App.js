import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyled";
import { darkTheme, lightTheme } from "./styles/Theme.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, About, Blog, Skills, Works, Button, Sound } from "./components";
import styled from "styled-components";

const ThemeChange = styled.div``;
const App = () => {
  const [clicks, setClicks] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={clicks ? darkTheme : lightTheme}>
        <Sound />
        <ThemeChange onClick={() => setClicks(!clicks)}>
          <Button />
        </ThemeChange>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/about"
              element={<About theme={clicks ? "off" : "on"} />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/skills"
              element={<Skills theme={clicks ? "off" : "on"} />}
            />
            <Route path="/works" element={<Works />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
