// src/pages/Search.js
import React, { useState } from "react";
import Map from "../components/Map/MapContent"
// import MapCompo from "../components/Map/Map"
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SearchResult from "./SearchResult";
import axios from "axios";
const Search = () => {
  const [showing, setShowing] = useState(true);
  let [inputValue, setInputValue] = useState("");
  const searchShowing = () => {
    setShowing(!showing);
  }
  const navigate = useNavigate();
  const data = {
    value : inputValue
  }
  const postValue = () => {
    axios.post('http://127.0.0.1:8000/checks/photo/',data)
      .then(res=>{
        // console.log(res);
        console.log("success");
    })
      .catch(err=>{
        console.log(err);
    })
  }
  // }
  // const handleSearch = () => {
  //   postValue();
  //   navigate(`keyword?=${inputValue}`,{state: {keyword:inputValue}})
  // }
  const handleSearch = () => {
    postValue();
    navigate('keyword', {state: {keyword:inputValue}})
  }
  if (showing){
    return(
      <>
        <Header>
          <Title>사진관 검색</Title>
          <IconSearch src="/icon/search-icon.svg" onClick={searchShowing}></IconSearch>
        </Header>
        <Map/>
      </>
    );
  }
  else{
    return (
      <>
        <Header>
          <IconBack src="/icon/arrow-left.svg" onClick={searchShowing}></IconBack>
          <form>
            <SearchBar type="text" placeholder="사진관 이름을 입력 후, 검색 버튼을 눌러주세요 (enter X)" onChange={(event) => setInputValue(event.target.value)}></SearchBar>
            <Button type="button" value="" onClick={handleSearch}></Button>
          </form>
          <Small>'멋사 해커톤 인생네컷' 을 검색해보세요!</Small>
        </Header>
        <Map keyword={inputValue} />
        <Routes>
          <Route path="/keyword" element={<SearchResult/>}/>
        </Routes>
        
      </>
    );
  }
}


export default Search;

const Small = styled.div`
  position: absolute;
  font-size: 10px;
  bottom: 65px;
  right: 30px;
`

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 110px;
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
  font-weight: 500;
  color: #1b1b1b;
`

const IconSearch = styled.img`
  position: absolute;
  bottom: 32px;
  right: 35px;
  cursor: pointer;
`

const IconBack = styled.img`
  position: absolute;
  bottom: 32px;
  left: 25px;
  cursor: pointer;
`

const SearchBar = styled.input`
  box-sizing: border-box;
  width: 290px;
  height: 30px;
  bottom: 28px;
  right: 25px;
  
  position: absolute;

  border: 1.5px solid #9848FF;
  border-radius: 21.5px;
  padding: 0 30px 1.5px 15px;
  &::placeholder{
    font-size: 10px;
  }
  &:focus{
    outline: none;
    padding-bottom: 1px;
  }
`

const Button = styled.input`
  background-image:url('/icon/search-icon.svg');
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 32px;
  top: 57px;
`