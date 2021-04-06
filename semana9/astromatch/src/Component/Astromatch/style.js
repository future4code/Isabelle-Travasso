import styled from 'styled-components'

export const ButtonNotMatch = styled.button`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 2px solid red;
   color: red;
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   background-color: white;

   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: red;
    color: white;
    transform: scale(0.8);
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`

export const ButtonMatch = styled.button`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 2px solid green;
   color: green;
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: green;
    color: white;
    transform: scale(0.8)
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`

export const ButtonsPosition = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  padding: 10px 0;
`

export const ProfileDetails = styled.p`
  width: 50%;
  background-color: white;
`

export const ProfileName = styled.p`
  font-weight: bold;
  background-color: white;
`

export const Container = styled.div`
display:flex;
flex-direction: column;
position: relative;
`

export const Text = styled.p`
position: absolute;
color: ${(props) => (props.dark ? "#0000" : "#FFFF")};
font-family: "AvenirNext-Regular"

${({title, large, small}) => {
  switch(true) {
    case title:
      return `font-size: 32px`;
    case large:
      return `font-size: 20px`;
    case small:
      return `font-size: 13px`;
  }

}}

${({bold, heavy}) => {
switch(true) {
    case bold:
      return `font-weight: 600`;
    case heavy:
      return `font-weight: 700`;
}
}}
`

export const ProfileImgBackground = styled.img`
   width: 60%;
   height: 100%;
   position: absolute;
   align-self:center;
   justify-self: center;
   border-radius: 20px;
`

export const MainText = styled.div` 
padding: 0 32px;
margin: 170px 0;
`

export const Divider = styled.div `
border-bottom-color: #fff;
border-bottom-width: 2px;
width: 150px;
margin: 8px 0;
`

export const ContainerWhite = styled.div `
background-color: #fff;
width: 600px
`
