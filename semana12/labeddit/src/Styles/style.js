import styled from 'styled-components'

export const HomeIcon = styled.img`
    width: 75px;
    margin: 4px 16px 0;
    cursor: pointer;
`
export const ContainerHeader = styled.div`
    background: #ffff;
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
    align-items: center;
`

export const Button = styled.button`
    border-radius: 20px;
    border-color: rgb(67 81 90);
    background-image: linear-gradient( rgb(253 126 0),  rgb(248 179 77));
    color: rgb(39 47 52);
    font-size: 16px;
    padding: 12px;
    margin-top: ${props => props.main ? "8%" : 'auto'};
    cursor: pointer;
    font-weight: bold;
`

export const Container = styled.div`
   display: flex;
   flex-direction: ${props => props.button ? "row" : 'column'};
   align-items:center;
   justify-content: center;
   align-content:center;
   margin-top: 2em;
   grid-column:${props => props.progress ? "2" : 'auto'};
   
   @media only screen and (max-width: 836px){
       margin-bottom: 20%;
    }
`
export const Title = styled.h1`
    color: rgb(67 81 90);
    font-size: 40px;
    font-family: cursive;
        
    @media only screen and (max-width: 836px){
       /* font-size: 30px;
       margin: 0 5%; */
    }
`
export const Text = styled.p`
    color: rgb(67 81 90);
    margin-left: 4px;
    cursor: ${props => props.link ? "pointer" : 'auto'};
    text-decoration: ${props => props.link ? "underline" : 'auto'};
`

export const ContainerInput = styled.form`
    display: flex;
    justify-items: center;
    align-items:center;
    flex-direction: ${props => props.register ? "row" : "column"};
    margin: 1em 30px;

    @media only screen and (max-width: 955px){
        /* margin: 1px 30%; */
    }
    @media only screen and (max-width: 836px){
        /* margin: 10% 30%; */
    }
`

export const Input = styled.input`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: ${props => props.login ? "50%" : "200%"};
    padding: ${props => props.login ? "2%" : "5% 2%"}; 
    border-radius: 2rem;
    margin-bottom: 2%;
    border: 2px inset rgb(67 81 90);
    background-color: rgb(233, 233, 233);
    @media only screen and (max-width: 955px){
        width: ${props => props.create ? "200%" : "200%"};
    }
    @media only screen and (max-width: 836px){
        width: ${props => props.create ? "155%" : "195%"};
    }
`
