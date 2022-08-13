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
      email: email,
      password: password
    }

    Axios.post('/api/v1/mysite/rest_auth/login/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
        } else {
          setEmail('')
          setPassword('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setEmail('')
        setPassword('')
      })
  }

  return (
    <>
      <div class="title">PICABOOK</div>
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
    </>
  )
}

export default Login;