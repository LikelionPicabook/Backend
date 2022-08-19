// component/User.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';
import MyPage from '../pages/MyPage';
import Monthly from "../pages/Monthly";
import Tips from "../pages/Tips";
import Nav from './Nav';
import PhotoBook from "../pages/PhotoBook";
// import SearchResult from "../pages/SearchResult";

const User = () => {
  return(
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/search/*" element={<Search/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/monthly" element={<Monthly/>} />
        <Route path="/tips" element={<Tips/>} />
        <Route path="/photobook/*" element={<PhotoBook/>} />
      </Routes>
      <Nav/>
    </>
  );
}

export default User;