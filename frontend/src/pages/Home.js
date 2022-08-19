// src/pages/Home.js

import React from "react";
import "./styles/home.css";


const Home = () => {
  return (
    <>
      <header className="header-home">
        <div className="searchbar">
          <button><img src="/icon/search-active.svg" alt=""/></button>
          <input type="text" placeholder="사진관 이름, 컨셉, 위치 등을 입력해보세요"/>
        </div>
        <button><img src="/icon/cart_in_main.svg" alt=""/></button>
        <button><img src="/icon/user_in_main.svg" alt=""/></button>
      </header>

      <div className="container">

        <section className="places">
          <div className="section-title">이번 달 BEST 사진관</div>
          <div className="section-sub">피카북이 선정한 인기 사진관 리스트</div>
          <div className="section-content">
            <div>
              <img src="/img/harufilm.png" alt=""/>
              <p>홍대 하루필름</p>
            </div>
            <div>
              <img src="/img/sihyunhada.png" alt=""/>
              <p>시현하다 본점</p>
            </div>
            <div>
              <img src="/img/yourshutter.png" alt=""/>
              <p>유어셔터</p>
            </div>
            <div>
              <img src="/img/oldmoon.png" alt=""/>
              <p>그믐달 사진관</p>
            </div>
          </div>
        </section>

        <section className="items">
          <div className="section-title">인기 많은 사진 둘러보기</div>
          <div className="section-sub">인싸라면 한번 쯤 다 찍어봤다는 '그' 사진들</div>
          <div className="section-content">
            <div>
              <img src="/img/bestphoto1.png" alt=""/>
            </div>
            <div>
              <img src="/img/bestphoto2.png" alt=""/>
            </div>
            <div>
              <img src="/img/bestphoto3.png" alt=""/>
            </div>
            <div>
              <img src="/img/bestphoto4.png" alt=""/>
            </div>
          </div>
        </section>

        <section className="pose">
          <div className="section-title">포징에 서툰 당신께 추천하는 포즈</div>
          <div className="section-sub">평소에 봐두어야 실전에서 잘 찍을 수 있다구요!</div>
          <div className="section-content">
            <div>
              <img src="/img/pose1.png" alt=""/>
              <p>뒤집힌 브이손</p>
            </div>
            <div>
              <img src="/img/pose2.png" alt=""/>
              <p>스폰지밥 인생네컷</p>
            </div>
            <div>
              <img src="/img/pose3.png" alt=""/>
              <p>바디프로필 추천포즈</p>
            </div>
            <div>
              <img src="/img/pose4.png" alt=""/>
              <p>단체사진 포즈</p>
            </div>
          </div>
        </section>

      </div>
    </>
  ); 
}

export default Home;