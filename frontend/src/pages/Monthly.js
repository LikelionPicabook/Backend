import React from "react";
import styled from "styled-components";

const Monthly = () => {
  return (
    <>
      <Header>
        <Title>월간 포꾸</Title>
        <Icon src="/icon/shopping-cart.svg"></Icon>
      </Header>
      <Form>
        <SearchBar type="text" placeholder="포토북 꾸미기 용품을 검색해 보세요"></SearchBar>
        <Button type="submit" value=""></Button>
      </Form>
      <Container>

        <Section1>
          <SubTitle>BEST 랭킹순</SubTitle>
          <Items>
            <Item>
              <img src="/img/bestitem1.png"/>
              <Text>곰돌이 씰스티커</Text>
            </Item>
            <Item>
              <img src="/img/bestitem2.png"/>
              <Text>마리 홀로그램</Text>
            </Item>
            <Item>
              <img src="/img/bestitem3.png"/>
              <Text>스티커 10종 랜덤</Text>
            </Item>
            <Item>
              <img src="/img/bestitem4.png"/>
              <Text>어디든 잘써지는</Text>
            </Item>
          </Items>
        </Section1>

        <Section2>
          <SubTitle>이런 포꾸 아이템은 어때요?</SubTitle>
          <Items>
            <Item>
              <img src="/img/item1.png"/>
              <Text>끈끈이가 남지 않는 리무버블씰</Text>
            </Item>
            <Item>
              <img src="/img/item2.png"/>
              <Text>랜덤팩 리무버블씰 3종</Text>
            </Item>
            <Item>
              <img src="/img/item3.png"/>
              <Text>알파벳 + 숫자 스티커 6종 랜덤</Text>
            </Item>
          </Items>
        </Section2>

        <Section3>
          <SubTitle>최근 본 상품</SubTitle>
          <Items>
            <Item>
              <img src="/img/bestitem1.png"/>
              <Text>곰돌이 씰스티커</Text>
            </Item>
            <Item>
              <img src="/img/bestitem6.png"/>
              <Text>러비더비 씰스티커</Text>
            </Item>
            <Item>
              <img src="/img/bestitem5.png"/>
              <Text>빅방울 스티커</Text>
            </Item>
            <Item>
              <img src="/img/bestitem2.png"/>
              <Text>마리 홀로그림</Text>
            </Item>
          </Items>
        </Section3>

      </Container>
    </>
  );
}

export default Monthly;

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  margin-bottom: 30px;
  z-index: 400;
  display: flex;
  justify-content: center;
  align-items: end;
`

const Icon = styled.img`
  position: absolute;
  right: 45px;
`

const Title = styled.div`
  font-size: 18px;
`

const Form = styled.form`
  height: 40px;
  z-index: 500;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  // background-color: yellow;
  border-bottom: 1px solid #d5d5d5;
  // box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);

`

const SearchBar = styled.input`
  box-sizing: border-box;
  width: 320px;
  height: 30px;
  border: 1.5px solid #9848FF;
  border-radius: 21.5px;
  padding: 0px 30px 1.5px 15px;
  &::placeholder{
    font-size: 10px;
  }
  &:focus{
    outline: none;
  }
`

const Button = styled.button`
  background-image:url('/icon/search-icon.svg');
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 32px;
  top: 115px;
`

const Container = styled.div`
  position: absolute;
  top: 160px;
  height: 570px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0.5px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: transparent;
  }
  &::-webkit-scrollbar-track{
    background-color: transparent;
  }
  display: flex;
  flex-direction: column;
`


const Section1 = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 5px;
`

const Section2 = styled(Section1)`
  background-color: #ede9ff
`
const Section3 = styled(Section1)`
  padding-bottom: 30px;
`
const SubTitle = styled.div`
  margin: 20px;
  font-size: 16px;
`
const Items = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar{
    width: 0.5px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: transparent;
  }
  &::-webkit-scrollbar-track{
    background-color: transparent;
  }
  padding: 0 10px;
  box-sizing: border-box;
`
const Item = styled.div`
 margin: 0 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
`

const Text = styled.div`
  font-size: 11px;
  white-space: nowrap;
  margin-top: 10px;
`