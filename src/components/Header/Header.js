import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logohd>
          <Logo src="/assets/logo.png" alt="" />
        </Logohd>
        <Navs>
          <Nav1 to="/">Home</Nav1>
          <Nav2 to="/about">About</Nav2>
          <Nav3 to="/service">Service</Nav3>
          <Nav3 to="/contact">Contact</Nav3>
     


          <Link to="SignUp">
            <IconUser></IconUser>
          </Link>
        </Navs>
        <Menu>
          <AiOutlineMenu
            id="menu"
            onClick={() => {
              document.getElementById("sidebar").style.width = "270px";
              document.getElementById("menu").style.display = "none";
              document.getElementById("close").style.display = "block";
            }}
          />
          <AiOutlineClose
            id="close"
            style={{
              display: "none",
            }}
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("menu").style.display = "block";
              document.getElementById("close").style.display = "none";
            }}
          />
        </Menu>
        <SideBar id="sidebar">
          <Sider>
            <SideNav to="/">Home</SideNav>
            <SideNav to="/about">About</SideNav>
            <SideNav to="/service">Service</SideNav>
            <SideNav to="/contact">Contact</SideNav>

          </Sider>
          <Logonav src="/assets/logo.png" alt=""/>
        </SideBar>
        {/* <Btnhold>
          <Icon>
            <AiOutlineMenu size={"20px"} />
          </Icon>
        </Btnhold> */}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Menu = styled.div`
  display: none;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const SideBar = styled.div`
  width: 0;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: none;
  transition: 300ms;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* @media screen and (max-width: 320px) {
    width: 300px;
  } */
`;
const SideNav = styled(Link)`
  color: white;
  margin-top: 50px;
  text-decoration: none;
`;
const Logonav = styled.img`
  margin-bottom: 20px;
  height: 90px;
  width: 100px;
`;
const Sider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* background: red; */
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: gray; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  /* overflow: hidden; */
  backdrop-filter: blur(10px);
`;
const Wrapper = styled.div`
  height: 50px;
  width: 85%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
`;
const Logohd = styled.div`
  font-weight: 900;
  margin-top:10px ;
`;
const Logo = styled.img`
  height: 70px;
  width: 100px;
`;
const Navs = styled.div`
  width: 300px;
font-family:Poppins;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Nav1 = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Nav2 = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Nav3 = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Btnhold = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: blue; */
`;

const Icon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const IconUser = styled(FaUserCircle)`
  font-size: 25px;
  display: none;
  color: blue;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    // background: blue;
  }
`;
// const Wrapper = styled.div``;
// const Wrapper = styled.div``;
// const Wrapper = styled.div``;