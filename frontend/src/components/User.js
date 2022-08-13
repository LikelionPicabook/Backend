// component/User.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';
import MyPage from '../pages/MyPage';
import Nav from './Nav';


const User = () => {
  return(
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/mypage" element={<MyPage/>} />
      </Routes>
      <Nav/>
    </>
  );
}

export default User;