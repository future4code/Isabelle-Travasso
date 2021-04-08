import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';


export const MatchIcon = styled.p`
	cursor: pointer;
	margin:0;
	padding-right: 10px;
	background-color: #ffffff;
	border-radius:20px;
`
export const Logo = styled.h2`
	display: inline;
	margin-left: ${props => props.match ? "0" : "130px"};
	background-color: #ffffff;
	font-size: 24px;
	font-family: cursive;
	color: ${props => props.match ? "blueviolet" : "rgba(225, 0, 255, 0.952)"};
	
	@media only screen and (max-width: 420px){
	margin-left: ${props => props.match ? "0" : "4em"};

  }

  @media only screen and (max-width: 320px){
  width: 90%;
  margin-left: ${props => props.match ? "0" : "2em"};
  }
	`

export const ContainerLogo = styled.div`
	height: 50px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background-color: #ffffff;
	flex-shrink: 0;
	margin-top: 20px;
	border-radius: 20px 20px 0 0; 
	width: ${props => props.matches ? "400px" : "auto"};

	@media only screen and (max-width: 420px){
	width: ${props => props.matches ? "20em" : "auto"};

  }

  @media only screen and (max-width: 320px){
	width: ${props => props.matches ? "100%" : "auto"};
  }

`

export const useStyles = makeStyles((theme) => ({
	root: {
		color: 'rgb(51, 6, 94)',
	},
}));

export const MachesNumber = styled.p`
	font-weight: bold;
	color:green;
`