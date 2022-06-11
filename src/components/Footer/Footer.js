import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FootOne>
          <FootLogo>Soad.</FootLogo>

          <Developer>@Soad. 2022 - created by PRECIOUS ONUEGBU</Developer>

          <FootSocial>
            <div>
              {" "}
              <BsFacebook />
            </div>
            <div>
              {" "}
              <BsInstagram />
            </div>
            <div>
              <BsTwitter />
            </div>
            <div>
              <SiGmail />
            </div>
          </FootSocial>
        </FootOne>
        <FootTwo>
          <FootTwoHold>
            <FootTitle>Home</FootTitle>
            <FootNav>Event</FootNav>
        
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Rent</FootTitle>
            <FootNav>Pricing</FootNav>
            <FootNav>Career</FootNav>
          
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Share</FootTitle>
            <FootNav>Sign Up</FootNav>
           
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Service</FootTitle>
            <FootNav> Help</FootNav>
            <FootNav>Docs</FootNav>
           
          </FootTwoHold>
        </FootTwo>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #3e635b;
  display: flex;
  font-family:poppins ;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 80px 0;
`;
const FootOne = styled.div`
  width: 250px;
  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
const FootLogo = styled.div`
  font-weight: 800;
  margin-bottom: 20px;
  color: #e8bf0a;
`;
const FootMotto = styled.div`
  font-size: 13px;
  margin-bottom: 25px;
  color: #fff;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const FootSocial = styled.div`
  display: flex;
  /* color: #707070; */
  color: black;
  font-size: 17px;
  div {
    margin: 0 15px 0 0;
  }
`;
const FootTwo = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 610px) {
    width: 310px;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;
const FootTwoHold = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: brown; */
    margin-bottom: 9px;
  }
`;
const FootTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 8px;
  color: #fff;
`;
const FootNav = styled.div`
  font-size: 12px;
  margin: 10px 0;
  color: #fff;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: #e8bf0a;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
`;

const Developer = styled.div`
  font-weight: 500;
  font-size: 10px;
  margin-bottom: 10px;
  color: #fff;
`;
