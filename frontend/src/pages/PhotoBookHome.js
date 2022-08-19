import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PhotoBookHome = () => {

  return (
      <Inner>
        <Header>
          <Title>포토북 제작</Title>
          <StyledLink to="newbook">
            <IconCheck src="/img/newbook.png" ></IconCheck>
            <Text>새로 만들기</Text>
          </StyledLink>
        </Header>
        <Container src="/img/photobook.png">
        </Container>
      </Inner>
  );
}

export default PhotoBookHome;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:active{
    color: black;
  }
`

const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
  z-index: 300;
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

const IconCheck = styled.img`
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`
const Text = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  font-size: 10px;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`

const Container = styled.img`
  display: block;
  width: 375px;
  height: 605px;
  position: absolute;
  top: 120px;
  z-index: 0;
`
