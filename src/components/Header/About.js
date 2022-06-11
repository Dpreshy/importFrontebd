import React from 'react'
import styled from 'styled-components'
import {MdConstruction} from 'react-icons/md'


export default function About() {
  return (
    <Container>
        <Wrapper>
            <Title>About Soad</Title>
            
        </Wrapper>
       
        <Wrapper3>
            <Box2>
                <Info>What we do</Info>
                <Line></Line>
                <Text>Technically, the road is a massive undertaking with many construction challenges due to the low lying marshy area, muddy and swampy soil conditions and considerable tidal movements. The scope comprises construction of a 39 km long road, cross culverts and two mini bridges with a span of 23 m each as well as two creek bridges, Afa Creek Bridge of about 530 m length and Nanabie Creek Bridge of ,</Text>
                <Card>
                    
                   
                </Card>
            </Box2>
            <Box>
                <img src="/assets/66.jpg" alt="" />
            </Box>
        </Wrapper3>
        <Wrapper4>
            <Box>
                <img src="/assets/88.jpg" alt="" />
            </Box>
            <Box2>
                <Info>What we do</Info>
                <Line></Line>
                <Text>Technically, the road is a massive undertaking with many construction challenges due to the low lying marshy area, muddy and swampy soil conditions and considerable tidal movements. The scope comprises construction of a 39 km long road, cross culverts and two mini bridges with a span of 23 m each as well as two creek bridges, Afa Creek Bridge of about 530 m length and Nanabie Creek Bridge of ,</Text>
                <Card>
                   
                   
                </Card>
            </Box2>
        </Wrapper4>
    </Container>
  )
}


const Container = styled.div`
padding-bottom: 60px;
font-family:poppins ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;
const Span = styled.p`
width: 550px;
font-size: 15px;
margin-top: -20px;


@media (max-width: 768px) {
  font-size: 12px;
  text-align:center ;
  width: 550px;
}
`;
const Title = styled.h2`
font-size: 45px;
`;
const Wrapper4 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
`;
const Wrapper3 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
`;
const Wrapper2 = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
`;
const Box = styled.div`
width: 600px;
height: 450px;

img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
`;
const Box2 = styled.div`
width: 550px;
`;
const Text = styled.p`
font-size: 15px;
font-weight:700;
@media (max-width: 768px) {

  }
`;
const Line2 = styled.h2`
background-color: green;
width: 500px;
height: 2px;
margin-top: -5px;
`;
const Line = styled.h2`
background-color: green;
width: 150px;
height: 2px;
margin-top: -20px;
`;
const Info = styled.h2`
font-size: 25px;
font-weight: 700;
`;
const Card = styled.div`
display: flex;
justify-content: space-between;
width: 400px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
background-color: #3E635B;
color: #fff;
border-radius: 10px;
`;
const Icon = styled.div`
margin: 10px;
`;
const Content = styled.div`
margin: 10px;
`;
const Top = styled.p`
font-size: 1.2rem;
margin-top: -5px;
`;
const Bottom = styled.div`
font-size: 1rem;
width: 300px;
margin-top: -20px;
`;