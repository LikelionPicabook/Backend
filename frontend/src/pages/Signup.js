import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState(false)

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePwd1 = (e) => {
    setPassword1(e.target.value)
  }

  const onChangePwd2 = (e) => {
    setPassword2(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password1: password1,
      password2: password2
    }

    // 유효성 검사
    if(password1 !== password2) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
      return false
    }

    Axios.post('/api/v1/mall/auth/register/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
        } else {
          setEmail('')
          setPassword1('')
          setPassword2('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 혹은 비밀번호가 일치하지 않습니다')
      })
  }

  return (
    <>
      <Header>
        <Link to="/login">
          <Close style={{backgroundImage:`url(/icon/x.svg)`}}></Close>
        </Link>
        <div>회원가입</div>
      </Header>
      <SignupDiv>
        <br />
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <SignupForm onSubmit={onSubmit}>
          <Label htmlFor='email'>이메일</Label>
          <SignInput
            type='email'
            value={email}
            onChange={onChangeEmail}
            required
            placeholder='이메일 입력'
          />
          <Label htmlFor='password1'>비밀번호</Label>
          <SignInput
            type='password'
            value={password1}
            onChange={onChangePwd1}
            minLength='8'
            pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
            required
            placeholder='소문자, 숫자, 특수문자 포함 8~16자'
          />
          {/* //비밀번호 확인 */}
          <SignInput
            type='password'
            value={password2}
            onChange={onChangePwd2}
            minLength='8'
            pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
            required
            placeholder='소문자, 숫자, 특수문자 포함 8~16자'
          />
          <Label htmlFor='name'>이름</Label>
          <SignInput
            type='text'
            // value='name'
            required
            placeholder='실명을 입력하세요'
          />
          <Label htmlFor='birth'>생년월일</Label>
          <SignInput
            type='text'
            // value='birth'
            required
            placeholder='8자리 입력'
          />
          <SignupBtn type='submit' size="large" value='피카북 시작하기' />
        </SignupForm>
      </SignupDiv>
    </>
    
  )
}

export default Signup;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 30px;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  height: 110px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;

  background: #FFFFFF;
  border-bottom: 1px solid #d4d4d4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: end;
`;

const SignupDiv = styled.div`
  position: absolute;
  top: 110px;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 40px 30px;
  width: 100%;
  height: 702px;
  box-sizing: border-box;
`;

const SignupForm = styled.form`
`;

const SignInput = styled.input`
  margin: 0 0 5px 0;
  padding: 10px;
  padding-left: 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  &:focus{
    outline: none;
    border-bottom: 1px solid #9747ff;
  };
  ::placeholder{
    color:#b9b9b9;
  }
`

const SignupBtn = styled.input`
  margin-top: 120px;
  width: 313px;
  height: 40px;
  background: linear-gradient(91.96deg, #9747FF 15.31%, #87A1FF 88.37%);
  border-radius: 22.5px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 14.5px;
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 55px;
  left: 30px;
`