import React, { useState } from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import "./styles/login.css"
import { Link } from "react-router-dom";

const LoginDiv = styled.div`
`;

const Login= () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  

  const onSubmit = (e) => {
    e.preventDefault()
    
    const user = {
      username: email,
      email: email,
      password: password
    }
    
    // 이거 post 는 데이터 보내는거고 get 은 받는거  get('받아갈 주소', 받을)
    Axios.post('http://127.0.0.1:8000/rest-auth/login/',user)
    .then(res => {
      console.log(user);
      console.log(res.data);
      localStorage.clear();
      localStorage.setItem('token',res.data.key)
      window.location.replace('http://localhost:3000/user/home')
    })
    .catch(err=>{
      console.log(user);
      console.log(err)
      alert('로그인 안댐')
      setEmail('')
      setPassword('')
    })
  }
  

  
  return (
    <Background>
      <div className="title">PICABOOK</div>
      <section className='log_section'>
        <LoginDiv>
          {errors === true && <h2>Cannot log in with provided credentials</h2>}
          <form className="login_form" onSubmit={onSubmit}>
            <Input
              type='email'
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              className="login_input"
              placeholder='이메일을 입력해주세요'
            />
            <Input
              type='password'
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              className="login_input"
              placeholder='비밀번호를 입력해주세요'
            />
            <Input type='submit' size="large" value='로그인' className="login_btn"/>
          </form>
        </LoginDiv>
        <div className="login_option">
          <button>아이디 찾기</button>
          <button>비밀번호 재설정</button>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
          
        </div>
        <div className="signin_sns">
          <p>SNS로 간편 회원가입</p>
          <div className="signin_option">
            <button style={{backgroundImage:`url(/img/kakaotalk.png)`}}></button>
            <button style={{backgroundImage:`url(/img/naver.png)`}}></button>
            <button style={{backgroundImage:`url(/img/facebook.png)`}}></button>
          </div>
        </div>
      </section>
      <div className="nosign">비회원으로 시작</div>
    </Background>
  )
}

export default Login;


const Background = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`

