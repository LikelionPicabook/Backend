import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const NewBook = () => {

  const navigate = useNavigate();

  //파일 미리볼 url을 저장해줄 state
  const [fileImages, setFileImages] = useState([]);

  // 파일 저장
  const saveFileImage0 = (e) => {
    let num = 0;
    let tmpUrls = [...fileImages];
    tmpUrls[num] = (URL.createObjectURL(e.target.files[0]));
    setFileImages(tmpUrls);
  };
  const saveFileImage1 = (e) => {
    let num = 1;
    let tmpUrls = [...fileImages];
    tmpUrls[num] = (URL.createObjectURL(e.target.files[0]));
    setFileImages(tmpUrls);
  };
  const saveFileImage2 = (e) => {
    let num = 2;
    let tmpUrls = [...fileImages];
    tmpUrls[num] = (URL.createObjectURL(e.target.files[0]));
    setFileImages(tmpUrls);
  };
  const saveFileImage3 = (e) => {
    let num = 3;
    let tmpUrls = [...fileImages];
    tmpUrls[num] = (URL.createObjectURL(e.target.files[0]));
    setFileImages(tmpUrls);
  };

  // 파일 삭제
  const deleteFileImage = (num) => {
    console.log(fileImages);
    let tmpUrls = [...fileImages];
    URL.revokeObjectURL(tmpUrls[num]);
    tmpUrls.splice(num)
    setFileImages(tmpUrls);
  };

  const moveBack = () => {
    navigate('/user/photobook');
  }

  return (
    <Inner>
      <Header>
        <IconBack onClick={ moveBack } src="/icon/arrow-left.svg"></IconBack>
        <Title>제목 입력</Title>
        <IconCheck src="/img/check.png" ></IconCheck>
      </Header>
      <Container>
        <DecoImage></DecoImage>
        <ImageFrame>
            { fileImages[0] && (
              <img alt="sample" src={fileImages[0]}/>
            )}
        </ImageFrame>
        <Input0 ref={Input0} name="imgUpload" type="file" accept="image/*" onChange={saveFileImage0}/>
        <UpLoadBtn onClick={ () => {Input0.current?.click();} }></UpLoadBtn>
        <DeleteBtn onClick={()=>deleteFileImage(0)}></DeleteBtn>

        <ImageFrame>
            { fileImages[1] && (
              <img alt="sample" src={fileImages[1]}/>
            )}
        </ImageFrame>
        <Input1 ref={Input1} name="imgUpload" type="file" accept="image/*" onChange={saveFileImage1}/>
        <UpLoadBtn onClick={ () => {Input1.current?.click();} }></UpLoadBtn>
        <DeleteBtn onClick={()=>deleteFileImage(1)}></DeleteBtn>

        <ImageFrame>
            { fileImages[2] && (
              <img alt="sample" src={fileImages[2]}/>
            )}
        </ImageFrame>
        <Input2 ref={Input2} name="imgUpload" type="file" accept="image/*" onChange={saveFileImage2}/>
        <UpLoadBtn onClick={ () => {Input2.current?.click();} }></UpLoadBtn>
        <DeleteBtn onClick={()=>deleteFileImage(2)}></DeleteBtn>

        <ImageFrame>
            { fileImages[3] && (
              <img alt="sample" src={fileImages[3]}/>
            )}
        </ImageFrame>
        <Input3 ref={Input3} name="imgUpload" type="file" accept="image/*" onChange={saveFileImage3}/>
        <UpLoadBtn onClick={ () => {Input3.current?.click();} }></UpLoadBtn>
        <DeleteBtn onClick={()=>deleteFileImage(3)}></DeleteBtn>

      </Container>
      <Footer src="/img/pb_menu.png">

      </Footer>
    </Inner>
  );
}

export default NewBook;

const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 110px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  z-index: 500;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Title = styled.div`
  position: absolute;
  font-size: 18px;
  bottom: 30px;
  font-weight: 500;
  color: #1b1b1b;
`
const IconBack = styled.img`
  position: absolute;
  bottom: 32px;
  left: 25px;
  cursor: pointer;
`
const IconCheck = styled.img`
  position: absolute;
  bottom: 32px;
  right: 35px;
  cursor: pointer;
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  z-index: 100;
`

const Container = styled.div`
  width: 345px;
  height: 512px;
  background: url('/img/pb_background.png');
  background-size: cover;
  position: relative;
  top: 122px;
  left: 9px;
`
const DecoImage = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  margin: auto;
  background: url('/img/pb_deco.png');
  background-size: cover;
  width: 329px;
  height: 485px;
  z-index: 100;
`

const ImageFrame = styled.div`
  width: 140PX;
  height: 180px;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  &:nth-child(2){
    position: absolute;
    left: 40px;
    top: 60px;
    transform: rotate(-13deg);
    background-color: pink;
    z-index: 50;
  }
  &:nth-child(6){
    position: absolute;
    right: 30px;
    top: 100px;
    transform: rotate(18.84deg);
    background-color: beige;
    z-index: 50;
  }
  &:nth-child(10){
    position: absolute;
    left: 40px;
    top: 300px;
    transform: rotate(-8.22deg);
    background-color: lightyellow;
    z-index: 50;
  }
  &:nth-child(14){
    position: absolute;
    right: 30px;
    top: 260px;
    transform: rotate(9.63deg);
    background-color: lightpink;
    z-index: 50;
  }
`

const Input = styled.input`
  display: none;
`

const Input0 = styled(Input)`
`
const Input1 = styled(Input)`
`
const Input2 = styled(Input)`
`
const Input3 = styled(Input)`
`


const UpLoadBtn = styled.button`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
  opacity: 0.5;
  z-index: 900;
  border: none;
  background-image: url('/img/plus.png');
  background-size: cover;
  &:hover{
    opacity: 1;
  }
  &:nth-child(4){
    transform: rotate(-13deg);
    left: 22px;
    top: 72px;
  }
  &:nth-child(8){
    transform: rotate(18.84deg);
    right: 116px;
    top: 84px;
  }
  &:nth-child(12){
    transform: rotate(-8.22deg);
    left: 28px;
    top: 306px;
  }
  &:nth-child(16){
    transform: rotate(9.63deg);
    right: 129px;
    top: 248px;
  }
`
const DeleteBtn = styled.button`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url('/img/close.png');
  background-color: transparent;
  opacity: 0.5;
  z-index: 900;
  border: none;
  background-size: cover;
  &:hover{
    opacity: 1;
  }
  &:nth-child(5){
    transform: rotate(-13deg);
    left: 28px;
    top: 98px;
  }
  &:nth-child(9){
    transform: rotate(18.84deg);
    right: 124px;
    top: 110px;
  }
  &:nth-child(13){
    transform: rotate(-8.22deg);
    left: 31px;
    top: 332px;
  }
  &:nth-child(17){
    transform: rotate(9.63deg);
    right: 134px;
    top: 274px;
  }
  
`

const Footer = styled.img`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 90px;
`