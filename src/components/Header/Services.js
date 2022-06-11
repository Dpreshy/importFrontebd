import React from 'react'
import styled from 'styled-components'
import {MdMoving} from 'react-icons/md'


export default function Services() {
  return (
    <Container>
        <Wrapper>
            <Title>Our Services</Title>
            <Title2>Exports are the goods and services a country produces domestically and sells to businesses or customers who reside in a foreign country. This results in an influx of funds to the country that is selling their goods and services. </Title2>
            <Handle>
                <Card>
                    <Dmg src="/assets/2.jpg"/>
                    <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/3.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/4.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/5.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/1.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/44.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/88.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/33.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
                <Card>
                    <Dmg src="/assets/3.jpg"/>
                     <Info>we offer clearing services</Info>
                </Card>
            </Handle>
        </Wrapper>
    </Container>
  )
}


const Title2 = styled.div`
font-size:15px;
font-weight:600;
text-align:center ;
width:700px ;

@media screen and (max-width: 768px) {
   font-size:11px ;
   width:90%;
  }
`


const Container = styled.div`
display: flex;
font-family:poppins ;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 70px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Handle = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
margin: 10px 0;
justify-content: center;
align-items: center;
`;
const Card = styled.div`
width: 380px;
height: 270px;
background-color: #fff;
color: #000;
margin: 5px;

@media screen and (max-width: 768px){
    margin: 10px 0;
}
`;
const Info = styled.div`
margin-left: 10px;
font-weight: 400;
`;
const Dmg = styled.img`
width: 100%;
height: 230px;
object-fit:  cover;
`;
const Title = styled.div`
font-size:45px;
font-weight: 500;
`;