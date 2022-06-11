import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

import { Link } from "react-router-dom";
const Header = ({ cl, col }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/assets/logo.png" />
        </Logo>
        <Navhold>
         
          <Link to="/" >
            <Navs>HOME</Navs>
          </Link>
          <a href="/about">
            <Navs>ABOUT US</Navs>
          </a>
          <Link to="/service">
            <Navs>SERVICES</Navs>
          </Link>

          <Link to="/contact">
            <Navs>CONTACT</Navs>
          </Link>
        </Navhold>
        
        <Menu>
          <AiOutlineMenu
            id="menu"
            fontSize="25px"
            onClick={() => {
              document.getElementById("sidebar").style.width = "250px";
              document.getElementById("menu").style.display = "none";
              document.getElementById("close").style.display = "block";
            }}
          />
          <GiCancel
            id="close"
            fontSize="25px"
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
        <Sidebar id="sidebar">
          <Hold>
            
          <Link to="/">
            <Navs1>HOME</Navs1>
          </Link>
          <a href="/about">
            <Navs1>ABOUT US</Navs1>
          </a>
          <Link to="/service">
            <Navs1>SERVICES</Navs1>
          </Link>

          <Link to="/contact">
            <Navs1>CONTACT</Navs1>
          </Link>
          </Hold>
        </Sidebar>
      </Wrapper>
    </Container>
  );
};

export default Header;



const Navs1 = styled.div`
  margin-top: 35px;
  font-weight: bold;
  text-decoration:none;
  font-size: 17px;
  color: white;
  border-bottom: 2px solid ${({ cl }) => (cl ? "gray" : "tranparent")};
  padding: ${({ cl }) => (cl ? "2px 0" : "0 0")};
  margin-bottom: ${({ mb }) => (mb ? "3px" : "0")};
  cursor: pointer;
`;


const Hold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  flex: 1;
  margin-top:50px ;

`;
const Menu = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
const Sidebar = styled.div`
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  width: 0;
  height: 100vh;
  background-color:rgba(0,0,0,0.5);
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


const Navs = styled.div`
  text-decoration: none;
  margin-left: 25px;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  border-bottom: 2px solid ${({ cl }) => (cl ? "blue" : "tranparent")};
  padding: ${({ cl }) => (cl ? "2px 0" : "0 0")};
  cursor: pointer;
`;
const Navhold = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  height: 32px;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  span {
    color: blue;
    font-size: 40px;
    margin-bottom: 14px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 850px; */
  height: 80px;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:black;
  /* border-bottom: 1.5px solid lightgray; */
  background-color:  #3e635b;
`;
