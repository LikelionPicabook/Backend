// import {Route, Routes} from 'react-router-dom';
import React from 'react';
// import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Start() {
  const goLogin = () => {
    window.location.replace("/login")
  }
  return (
    <Background onClick={goLogin}>
    </Background>
    );
}

export default Start;

const Background = styled.div`
  background-image: url('/img/startpage.png');
  background-size: 375px 812px;
  height: 100%;
  width: 100%;
`