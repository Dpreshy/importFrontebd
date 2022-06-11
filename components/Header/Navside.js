import React from "react"
import styled from "styled-components"
import {BiUserCircle}  from "react-icons/bi"


 const Navside = ()=>{
    return (
        <Div>
            <Top><Icon/></Top>
        <div>Home</div>
        <div>About</div>
        <div>Categories</div>
        </Div>
    )
}
export default Navside

const Div = styled.div`
display: none;
@media(max-width:768px){
    height:100%;
min-height: calc(100vh - 70px);
width:100%;
display:flex;

justify-content:space-around;
align-items: center;
flex-direction:column
}

`
const Top = styled.div``
const Icon = styled(BiUserCircle)``
