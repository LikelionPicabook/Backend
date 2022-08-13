// src/pages/Search.js

import React, { useState } from "react";
import Map from "../components/Map/MapContent"
// import MapCompo from "../components/Map/Map"
import styled from 'styled-components';

const Search = () => {
  const [showing, setShowing] = useState(false);
  const searchShowing = () => setShowing(!showing);
  if (showing){
    return(
      <>
        <Header>
          <Title>사진관 검색</Title>
          <Icon src="/icon/search-icon.svg" onClick={searchShowing}></Icon>
        </Header>
        <Map/>
      </>
    );
  }
  else{
    return (
      <>
        <Header>
          <Title>사진관 검색해!</Title>
          <Icon src="/icon/search-icon.svg" onClick={searchShowing}></Icon>
        </Header>
        <Map/>
      </>
    );
  }
}

export default Search;

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  z-index: 500;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  position: absolute;
  font-size: 18px;
  bottom: 30px;
`

const Icon = styled.img`
  position: absolute;
  bottom: 32px;
  right: 35px;
  cursor: pointer;
`