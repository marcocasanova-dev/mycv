import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Header = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
`;
const MenuHeader = styled.div`
  padding: 4em;
  font-size: 14px;
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: end;
  flex-flow: row-reverse;
`;
const InformationBox = styled.div`
  position: relative;
  background: #671A21;
`;
const MenuCenter = styled.div`
  position: absolute;
  padding: 10px;
  bottom: 0px;
  width: 100%;
  background: rgba(0,0,0,0.4);
  color: white;
  display: flex;
  margin-bottom:10px;
`;

const MainTitle = styled.div`
  position: absolute;
  padding: 5px;
  bottom: 40%;
  width: 100%;
  background: rgba(0,0,0,0.1);
  color: white;
  display: flex;
`;
const IconBorder = styled.div`
  border: 2px solid white;
  background: rgba(144, 41, 58, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  padding: 5px;
  margin-left: 20px;
  cursor: pointer;
`;
const IntroVideo = styled.video`
  width: 100%;
`;
const CenterText = styled.p`
  text-align: center;
  font-size: 24px;
  font-style: italic;
  width: 100%;
`;
const Wrapper = styled.video`
  width: 100%;
`;
const StyledLeftCol = styled(Col)`
  padding: 10px;
  color: white;
  border-radius: 20px;
  background-color:rgba(0, 0, 0, 0.5);
`;
const StyledRightCol = styled(Col)`
  background: white;
  padding: 20px;
  color: #671A21;
`;
const NavBarHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;
const MenuHeaderBar = styled.div`
  display: flex;
  margin-bottom: 10px;
`;


export {
  MenuHeader,
  MenuHeaderBar,
  CenterText,
  Header,
  InformationBox,
  IntroVideo,
  MenuCenter,
  MainTitle,
  IconBorder,
  StyledLeftCol,
  StyledRightCol,
  NavBarHeader
};