import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react'

export const ButtonMatch = styled.button`
   margin-top: 35px;
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: ${props => props.notMatch ? "2px solid rgb(255, 0, 0)" : "2px solid lime"};
   color:  ${props => props.notMatch ? "rgb(255, 0, 0)" : "lime"};
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   background: rgba(0, 0, 0, 0.3);
   cursor:pointer;

   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: ${props => props.notMatch ? "rgb(219, 20, 20)" : "green"};
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
color: #FFFF;
font-family: "AvenirNext-Regular";
width: ${props => props.title ? "50%" : "70%"};
font-size: ${props => props.title ? "20px" : "16px"};
margin: ${props => props.title ? "130px 50px" : "160px 50px"};
font-weight: bold;
padding-left: 15px;
background-color:rgba(0, 0, 0, 0.4);
border-radius: 20px;

@media only screen and (max-width: 420px){
  width: 75%;
font-size: ${props => props.title ? "20px" : "16px"};
margin: ${props => props.title ? "105px 25px" : "150px 25px"};
  }

  @media only screen and (max-width: 320px){
    font-size: ${props => props.title ? "24px" : "18px"};
margin: ${props => props.title ? "-160px 20px" : "140px 20px"};
  }

`

export const ProfileImgBackground = styled.img`
    width: 90%;
    height: 100%;
    position: absolute;
    align-self:center;
    border-radius: 20px;
    

    ${({ photo }) => {
    if (photo)
      return `
					background-image: url(${photo});
					filter: blur(20px);
					height: 100%;
					max-width: 90%;
					position: absolut;
				`
  }}
`

export const MainText = styled.div` 
margin: 170px 0;
`

export const ContainerWhite = styled.div`
background-color: #fff;
padding: 20px 0;
width: 400px;
border-radius: 0 0 20px 20px;
margin-bottom: 16px;

@media only screen and (max-width: 420px){
  width: 20em;
}

@media only screen and (max-width: 320px){
  width: 100%;
}

`
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: 'center',
    margin: '50% 0',
  },
}));

export const options = {
  scale: 1,
  speed: 1000,
  max: 20
};

export const Tilt = (props) => {
  const tilt = useRef(null);
  const { options, ...rest } = props;

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}