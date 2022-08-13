import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axios from 'axios';	// 추가

function NavBar() {

  const [auth, setAuth] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setAuth(true)
    }
  }, [])

  // fetch to axios 수정 
  const handleLogout = () => {
    let token = localStorage.getItem('token')

    Axios.post('/api/v1/mall/auth/logout/', token)
      .then(res => {
        localStorage.clear()
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace('/')
      });
  }


  return(
    <div>
      <Menu>
        { auth ?
          <MenuItem key="logout" onClick={handleLogout}>
            로그아웃
          </MenuItem>
          :
          <MenuItem key="signin">
            <Link to="/login">
            로그인
            </Link>
          </MenuItem>
        }
        { auth ?
          <></>
        :
          <MenuItem key="signup">
            <Link to="/signup">
            회원가입
            </Link>
          </MenuItem>
        }
      </Menu>
    </div>
  )
}

export default NavBar;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  background-color:pink;
`;

const MenuItem = styled.div`
`