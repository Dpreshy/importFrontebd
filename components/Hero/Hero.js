import React from "react"
import styled from "styled-components"


const Hero = ()=>{
    return(
<Container>
    <Wrapper>
<Left>
<StarF src = "/images/star 1.png"/>

<Head>

    Carry Out Your School Activities With Just A Click
</Head>
<Stars src = "/images/star 2.png" />
<Start src = "/images/star 3.png" />
<Down>SkoolBus connects everyone every arm of school for safe and easy networking SkoolBus connects everyone every arm of school for safe and easy networking</Down>
<Button>Try it for free</Button>
</Left>
<Right>
<img src = "/images/education 1.png" alt ="hero" />
</Right>
    </Wrapper>
    
</Container>
    )
}

export default Hero


const Container = styled.div`
width:100%;
height:100%;
min-height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
width:1200px;
/* background:red; */
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
/* flex-direction:column;  */
@media(max-width:1200px){
    width:90%;
}
@media(max-width:800px){
 flex-direction:column-reverse;
 
}
`
const Left = styled.div`
flex:0.5;

@media(max-width:800px){
 display:flex;
 flex-direction:column;
 align-items:center
}

`
const Right = styled.div`
flex:0.7;
img{
    width:100%;
}
`
const Head = styled.div`
font-size:45px;
font-family:Montserrat;
font-weight:bold;
margin-bottom:20px;
position:relative;

@media(max-width:800px){
text-align:center;

}
@media(max-width:500px){
font-size:35px
}
`
const Down = styled.div`
width:450px;
font-size:16px;
font-weight:500;
margin-bottom:20px;
@media(max-width:800px){
text-align:center
}
@media(max-width:500px){

}

`
const Button = styled.button`
background:#fbb03b;
outline:none;
border:0;
padding:13px 30px;
font-family:montserrat;
border-radius:20px;
cursor:pointer;
:hover{
    transition:all 300ms;
    transform:scale(1.1)
}
`
const StarF = styled.img`
@media(max-width:500px){
}
`
const Start = styled.img`
position:absolute;
bottom:285px;
left:490px;
@media(max-width:500px){
    left:14px;
    bottom:90px;
    width:40px;

}

`
const Stars = styled.img`
position:absolute;
top:210px;
left:430px;
@media(max-width:500px){
    right:0;
    bottom:-500px;
    // background:blue

}
`