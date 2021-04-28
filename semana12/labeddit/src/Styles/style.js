import styled from 'styled-components'

export const HomeIcon = styled.img`
    width: 75px;
    margin: 4px 16px 0;
    cursor: pointer;
`

export const Img = styled.img`
    width: ${props => props.big ? "34px" : '25px'};
    margin-right: 10px;
    height: ${props => props.share ? "25px" : ''};
    cursor: ${props => props.share ? "pointer" : ''};
    margin: ${props => props.share ? "15px 0" : ''};

`

export const ContainerHeader = styled.div`
    background: #ffff;
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
    align-items: center;
`

export const Button = styled.button`
    border-radius: ${props => props.add ? "100%" : '20px'};
    border-color: rgb(67 81 90);
    background-image: linear-gradient( rgb(253 126 0),  rgb(248 179 77));
    color: rgb(39 47 52);
    font-size: ${props => props.add ? "28px" : '16px'};
    padding: ${props => props.add ? "18px 24px" : '12px'};
    margin-top: ${props => props.main ? "6%" : 'auto'};
    margin-left: ${props => props.logout ? "18px" : ''};
    cursor: pointer;
    font-weight: bold;

    @media only screen and (max-width: 505px){
        padding: ${props => props.add ? "12px 16px" : '12px'};
        font-size: ${props => props.comment ? "12px" : ''};
    }
    
`

export const ButtonFilter = styled.button`
    background:none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`

export const ContainerButton = styled.div`
    position: fixed;
    bottom:10px;
    right:20px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.button ? "row" : 'column'};
    align-items:center;
    justify-content: center;
    align-content:center;
    margin-top: 1em;
    grid-column:${props => props.progress ? "2" : 'auto'};
   
`
export const Title = styled.h1`
    color: rgb(67 81 90);
    font-size: 40px;
    font-family: cursive;
    margin: ${props => props.error ? "0" : ''};
        
`
export const TextFilter = styled.p` 
    font-size: 28px;
    padding: 10px;
    cursor: pointer;
`

export const Text = styled.p`
    text-transform: ${props => props.name ? "capitalize" : ''};
    color: ${props => props.reader ? "rgb(253 126 0)" : 'rgb(67 81 90)'};
    margin-left: 4px;
    cursor: ${props => props.link ? "pointer" : 'auto'};
    text-decoration: ${props => props.link ? "underline" : 'auto'};
    font-size: ${props => props.reader ? "2em" : ''};
    font-family: ${props => props.reader ? "cursive" : ''};
    font-weight: ${props => props.bold ? "bold" : ''};
   
    @media only screen and (max-width: 460px){
        font-size: ${props => props.reader ? "0px" : ''};
        font-size: ${props => props.vote ? "12px" : ''};
    }

`

export const Vote = styled.p`
    font-weight: bold;
    font-size: 28px;
    color: rgb(67 81 90);
    margin: 8px;
    cursor: pointer;
    &:hover{
        cursor: pointer;
        font-size: 32px;
    }
    @media only screen and (max-width: 460px){
        font-size: 20px
    }
`

export const ContainerInput = styled.form`
    display: flex;
    justify-items: center;
    align-items:center;
    flex-direction: ${props => props.register ? "row" : "column"};
    margin: 1em 30px;
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

    @media only screen and (max-width: 505px){
        width: ${props => props.create ? "155%" : "100%"};
    }
`

export const InputComment = styled.input`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: 100%;
    min-height: 150px;
    border-radius: 10px;
    border: 2px inset rgb(67 81 90);
    background-color: rgb(233, 233, 233);
`

export const ContainerPagination = styled.div`
    width: 100%;
    margin-top: 16px;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
`

export const ContainerVote = styled.div`
    display: flex;
    justify-content: start;
    align-items:center;
`

export const ContainerScroll = styled.div`
    min-height: 150px;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background-color: #3d7dca;
    }

`

export const CardPost = styled.div`
    width: calc(80% - 15px);
    max-width: 60%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 15px -5px;
`
export const CardPostSpaceBetween = styled.div`
    display:flex;
    justify-content: space-between;

    @media only screen and (max-width: 505px){
        flex-direction: ${props => props.responsive ? "column" : ""}; 
        align-items: ${props => props.responsive ? "center" : ""};    
    }
`