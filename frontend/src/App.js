// src/App.js
import "./index.css"
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './components/User'
import Start from './pages/Start'
import styled from 'styled-components';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Frame>
          <Routes>
            <Route path="/*" element={<Start/>} />
            <Route path="/login" element={<Login/>}/>	
            <Route path="/signup" element={<Signup/>}/>	
            <Route path="/user/*" element={<User/>} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </div>
  );
}

export default App;


const Frame = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 375px;
  height: 812px;
  box-sizing: border-box;
  border: 1px solid black;
`;
