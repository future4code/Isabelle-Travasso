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

export const ContainerProfile = styled.div`
	padding: 20px;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
  align-items: center;
  background-color: white;
  width: 50%

`

export const ImgProfile = styled.img`
  width: 50%
`

export const ProfileDetails = styled.p`
  width: 50%;
  background-color: white;
`

export const ProfileName = styled.p`
  font-weight: bold;
  background-color: white;
`

export const ButtonsPosition = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  padding: 10px 0;
`

