// src/components/Nav.js

import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import "../pages/styles/nav.css"

const Nav = () => {
  return (
    <Navbar>
      <NavLink to="/user/home" className={({ isActive }) => "nav-link" + (isActive ? "activated1" : "")}>
        <img src="/icon/home.svg"></img>
        <Title>메인홈</Title>
      </NavLink>
      <NavLink to="/user/search" className={({ isActive }) => "nav-link" + (isActive ? "activated2" : "")}>
        <img src="/icon/search.svg"></img>
        <Title>사진관찾기</Title>
      </NavLink>
      <NavLink to="/user/photobook" className={({ isActive }) => "nav-link" + (isActive ? "activated3" : "")}>
        <img src="/icon/edit.svg"></img>
        <Title>포토북 제작</Title>
      </NavLink>
      <NavLink to="/user/monthly" className={({ isActive }) => "nav-link" + (isActive ? "activated4" : "")}>
        <img src="/icon/cart.svg"></img>
        <Title>월간 포꾸</Title>
      </NavLink>
      <NavLink to="/user/tips" className={({ isActive }) => "nav-link" + (isActive ? "activated5" : "")}>
        <img src="/icon/camera.svg"></img>
        <Title>사진찍기꿀팁</Title>
      </NavLink>
    </Navbar>
  )
}

export default Nav;


const Navbar = styled.nav`
  position: absolute;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #ffffff;
  padding: 0 5px 0 12px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  
  z-index: 100;
`;

const Title = styled.p`
  font-size: 10px;
  text-decoration: none;
  color: b9b9b9;
`;