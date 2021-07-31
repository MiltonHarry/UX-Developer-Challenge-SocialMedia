import React, { useState } from 'react';
import './fonts/fonts.css'
import MainTotal from './components/MainTotal/MainTotal';
import Overview from './components/Overview/Overview';
import Header from './components/Header/Header';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes'
import './App.css';
import './images/icons.css';
import ModalData from './components/UI/ModalData';


const StyledApp = styled.div`
`
//Darkmode-Light mode toggle funtion -- start
function App() {
  const [theme, setTheme] = useState("light");


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }


//Darkmode-Light mode toggle funtion -- End


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
        <Header toggleTheme={themeToggler}></Header>
        <MainTotal></MainTotal>
        <Overview></Overview>
      </StyledApp>
      <ModalData></ModalData>
    </ThemeProvider>

  );
}

export default App;
