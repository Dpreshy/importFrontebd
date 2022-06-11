import React, {useState} from 'react'
import styled from "styled-components"
import pics from "./avat.png"

const Signup = () => {
    const [image, setImage] =useState(pics) 
    const [Avatar, setAvatar] =useState("") 

    const handleImage = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};
  return (
    <Container>
        <Wrapper>
            <Heade>
                
                <Image src={image} />
                <Label htmlFor="pix">Upload image</Label>
					
						<ImageInput
							id="pix"
						 onChange={handleImage}
							type="file"
							accept="image/*"
						/>

            </Heade>
            <Second>
             
                <Hold>
                    <Firstname placeholder="firtsname"/>
                    <Lastname placeholder="lastname"/>
                </Hold>
                <Hold>
                    <Subject placeholder='subject'/>
                    <Class placeholder="class"/>
                </Hold>
                <Hold>
                    <Email placeholder="Email"/>
                    <Password placeholder="password" type="password"/>
                </Hold>
                <Hold>
                    <Phone placeholder="phone"/>
                    
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </Hold>
                <Button>Submit</Button>
            </Second>
        </Wrapper>
    </Container>
  )
}

export default Signup

const Container = styled.div`
display: flex;
width:100%;
justify-content: center;
align-items: center;
height: 100%;
min-height: 100vh;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width:1200px;
padding: 20px;
@media(max-width:1200px){
    width:90%
}
`
const Heade = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
`
const Image = styled.img`
width:150px;
height:150px;
border-radius: 50%;
background:orange;
object-fit: cover;
`
const Label = styled.label`
margin-top: 20px;
padding: 10px 20px;
	background-color: green;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`
const Second = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width:80%;
height: 300px;


margin-top: 50px;
`
const Hold = styled.div`
display: flex;
justify-content:space-between;
width:90%;
select{
    width:400px;
height: 40px;padding:3px;
border: 0;
border-bottom: 1.5px solid grey;
outline: none;
margin-top:10px;
font-size:18px

}
`
const Subject = styled.input`
width:400px;
height: 40px;padding:3px;
border: 0;
border-bottom: 1.5px solid grey;
outline: none;
font-size:18px

`
const Class = styled.input`
width:400px;
height: 40px;padding:3px;
border: 0;
border-bottom: 2px solid grey;
outline: none;
border-bottom: 1.5px solid grey;
font-size:18px

`
const Firstname = styled.input`
width:400px;
/* border-bottom: 1.5px solid grey; */
font-size:18px;

height: 40px;padding:3px;

border: 0;
/* border-bottom: 2px solid grey; */
outline: none;
border-bottom: 1.5px solid grey;

`
const Lastname = styled.input`
width:400px;
font-size:18px;

height: 40px;padding:3px;
border: 0;
border-bottom: 2px solid grey;
border-bottom: 1.5px solid grey;

outline: none;
`
const Email = styled.input`
width:400px;
height: 40px;padding:3px;
border: 0;
border-bottom: 2px solid grey;
outline: none;
border-bottom: 1.5px solid grey;
font-size:18px


`
const Password = styled.input`
width:400px;
height: 40px;padding:3px;

border: 0;
border-bottom: 2px solid grey;
outline: none;
border-bottom: 1.5px solid grey;
font-size:18px


`
const Phone = styled.input`

width:400px;
height: 40px;padding:3px;
border: 0;
border-bottom: 2px solid grey;
outline: none;
border-bottom: 1.5px solid grey;
font-size:18px


`
const Country = styled.input`
width:400px;
height: 40px;padding:3px;
border: 0;
border-bottom: 2px solid grey;
outline: none;
border-bottom: 1.5px solid grey;
font-size:18px


`
 const Button = styled.button`
 padding: 15px 80px;
 margin-top: 30px;
 border: 0;
 outline:none;
 background: green;
 border-radius: 4px;
 color:#fff;
 font-size: 20px;
 opacity: 0.7;
 :hover{

animation:shake-horizontal 1.2s linear both} @keyframes shake-horizontal{0%,100%{transform:translateX(0)}10%,30%,50%,70%{transform:translateX(-10px)}20%,40%,60%{transform:translateX(10px)}80%{transform:translateX(8px)}90%{transform:translateX(-8px)}}
cursor:pointer;
opacity:1
 

 `
 const ImageInput = styled.input`
 display:none
 `