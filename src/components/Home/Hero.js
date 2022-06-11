import React from "react";
// import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Foot from "./Foot"
import Mini from "./Mini"

const Hero = () => {
  return (
    <Container>
      <Wrapper>
      <MainTitle>
        <Title>
            SOAD
        </Title>

        <SubTitle>
          
We aim to eliminate the task of dividing your project between different architecture and construction company.
<br/>
We are a company that offers design and build services for you from initial sketches to the final construction.
        </SubTitle>
       
      </MainTitle>
      </Wrapper>
      <Mini/>
      <Foot/>

    </Container>
  );
};

export default Hero;

const Wrapper = styled.div`
 height: 100%;

  width: 100%;
  background-image: url("/assets/22.jpg");
  background-position: center;
  background-size: cover;
`


const Container = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family:poppins ;
  overflow: hidden;
  ;                                                                                                                                                                                                                  
`;
const MainTitle = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  text-align: center;

  button {
    padding: 9px 20px;
    font-family: poppins;
    background-color: #000;
    outline: none;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 350ms;

    :hover {
      transform: scale(0.97);
    }
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubTitle = styled.div`
  color: #fff;
  margin-bottom: 20px;
  width: 75%;
  font-size:25px;
  text-transform: capitalize ;

  @media screen and (max-width: 520px){
  font-size:15px;
   
  }
`;
