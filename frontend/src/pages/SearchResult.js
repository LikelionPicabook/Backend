import react from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Map from "../components/Map/MapContent";

const SearchResult = () => {
  console.log(useLocation());
  const keyword = useLocation().state.keyword;
  const navigate = useNavigate();
  const goBack = () =>{
    navigate('/user/search');
  }
  return(
    <>
    <Header>
      <IconBack onClick={ goBack } src="/icon/arrow-left.svg"></IconBack>
      <Title> { keyword }</Title>
    </Header>
    <Map keyword={keyword} />
    </>
  )
}

export default SearchResult;


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
  font-size: 12px;
  bottom: 27px;
  right: 30px;
  font-weight: 400;
  color: #ffffff;
  background-color: #9848ff;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
`

const IconBack = styled.img`
  position: absolute;
  bottom: 32px;
  left: 25px;
  cursor: pointer;
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