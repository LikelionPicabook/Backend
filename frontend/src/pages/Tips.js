import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Tips = () => {
  const activeStyle = {
    color: "#9848ff",
    borderBottom: "1px solid #9848ff",
    fontWeight: 700
  }
  const nonActiveStyle = {
    color: "#bfbfbf",
    borderBottom: "1px solid white"
  }
  let pageArr = [
    {name: 'Favorite', style: activeStyle},
    {name: 'HOT', style: nonActiveStyle},
    {name: '4컷', style: nonActiveStyle},
    {name: '프로필', style: nonActiveStyle},
    {name: '셀프 사진관', style: nonActiveStyle},
    {name: '컨셉 사진관', style: nonActiveStyle},
    {name: '바디 프로필', style: nonActiveStyle},
  ]
  const itemArr = [
    {
      imgNum: [],
      text: [],
      heart: []
    },
    {
      imgNum: 2,
      text: ['인스타 1등 포즈','드라마에 나온 포즈','인스타 셀럽들은 다해','짱구가 좋은 사람들','네컷 연결해서 찍는 법','페트와 메트 따라하기'],
      heart: [false, false, false, false, false, false]
    },
    {
      imgNum: 3,
      text: ['킹받는 네컷포즈','쿠로미♥마이멜로디','페트와 메트 네컷','심으뜸 네컷 바프','콩순이 네컷 따라하기','인스타여신 포즈 따라하기'],
      heart: [false, false, false, false, false, false]
    },
    {
      imgNum: 4,
      text: ['청량한 무드','배우 프로필 정석','상큼한 무드','누드톤 무드','여름날의 무드','러블리 핑크 무드'],
      heart: [false, false, false, false, false, false]
    },
    {
      imgNum: 5,
      text: ['댕댕이들과 함께','사내맞선 셀프컷','러블리 커플','걸스데이 셀프컷','차분하고 힙하게','졸업사진 셀프컷'],
      heart: [false, false, false, false, false, false]
    },
    {
      imgNum: 6,
      text: ['복고풍 사진관','산격동 사진관','라피아 사진관','레치키치 사진관','시현하다에서 독특하게','리유스튜디오 웨딩촬영'],
      heart: [false, false, false, false, false, false]
    },
    {
      imgNum: 7,
      text: ['과감하게 누워찍기','커플 바디프로필','AOA 바디 프로필','제니 화보','캘빈클라인 속옷 활용하기','지피티 바디프로필'],
      heart: [false, false, false, false, false, false]
    }
  ]
  
  const [pageNum, setPageNum] = useState(0);
  const [pageComponents, setPageComponents] = useState(pageArr);
  const [itemComponents, setItemComponents] = useState(itemArr);
  
  const pageShow = (num) => {
    setPageNum(num);
    let copyPageArr = [...pageComponents];
    for (let i=0; i<6; i++){
      if (i===num) {copyPageArr[i].style = activeStyle ;}
      else {copyPageArr[i].style = nonActiveStyle ;}
    }
    setPageComponents(copyPageArr);
    console.log(pageComponents)
  }
  const HeartChange = (pageNum, idx) => {
    let copyArr = [...itemComponents];
    copyArr[pageNum].heart[idx] = !copyArr[pageNum].heart[idx];

    if (copyArr[pageNum].heart[idx] === true){
      copyArr[0].text = [...itemComponents[0].text, copyArr[pageNum].text[idx]];
      copyArr[0].imgNum = [...itemComponents[0].imgNum, `${pageNum+1}-${idx+1}`];
    }

    else{
      for (let i=0; i<copyArr[0].text.length; i++){
        if (copyArr[pageNum].text[idx] === copyArr[0].text[i]){
          copyArr[0].text.splice(i,1);
          copyArr[0].imgNum.splice(i,1);
          i--;
        }
      }
    }
    console.log(copyArr[0])
    setItemComponents(copyArr);
  }
  return(
    <>
      <Header>
        <Title>사진 찍기 꿀팁</Title>
      </Header>
      <Pages>
        { pageComponents.map((page,idx)=>{
            return <PageName key={idx} onClick={()=>{pageShow(idx)}} style={page.style}>{page.name}</PageName>
        }) }
      </Pages>
      <Container>
        {
          itemComponents[pageNum].text.map((item,idx)=>{
            if (pageNum > 0){
              return(
                <Item key={idx}>
                  <Image src={`/img/${pageNum+1}-${idx+1}.png`}></Image>
                  <Heart 
                    onClick={()=>{HeartChange(pageNum, idx)}}
                    src={`/img/${itemComponents[pageNum].heart[idx]}heart.png`}
                  ></Heart>
                  <Text>{item}</Text>
                </Item> )}
            else{
              return(
                <Item key={idx}>
                  <Image src={`/img/${itemComponents[pageNum].imgNum[idx]}.png`}></Image>
                  <Text>{item}</Text>
                </Item> )}
          })
        }
      </Container>
    </>
  )
}

export default Tips;

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
const Title = styled.div`
  font-size: 18px;
`

const Pages = styled.div`
  // background-color: yellow;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
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
  padding: 0 8px;
  box-sizing: border-box;
`

const PageName = styled.div`
  color: #bfbfbf;
  font-size: 14px;
  margin: 0px 11px;
  white-space: nowrap;
  padding-bottom: 3px;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid white;
  cursor: pointer;
`

const Container = styled.div`
  width: 100%;
  height: 560px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 18px 15px;
  padding: 0px 20px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 0.5px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: transparent;
  }
  &::-webkit-scrollbar-track{
    background-color: transparent;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
`
const Image = styled.img`
  
`

const Text = styled.div`
  font-size: 12px;
  margin-top: 10px;
  
`
const Heart = styled.img`
  cursor: pointer;
  position: absolute;
  top: 150px;
  right: 15px;
`