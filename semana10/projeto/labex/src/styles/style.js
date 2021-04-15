import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        justifyContent: 'center',
        margin: '5em 0',
    },
    image: {
        position: 'relative',
        height: 200,

        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

}));

export const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    font-family: cursive;
    text-shadow: 5px 6px 8px black;
`
export const Container = styled.div`
   display: flex;
   flex-direction: ${props => props.button ? "row" : 'column'};
   align-items:center;
   justify-content: center;
   align-content:center;
   margin-top: 2em;
   grid-column:${props => props.progress ? "2" : 'auto'}
`

export const HomeIcon = styled.img`
    width: 75px;
    margin: 4px 16px 0;
    cursor: pointer;
`

export const Button = styled.button`
    border-radius: 20px;
    border-color: #02698c;
    background-image: linear-gradient( #3c8095,  #62878b);
    color: rgb(243, 243, 243);
    font-size: 16px;
    padding: 12px;
    margin: 12px;
    cursor: pointer;
`

export const ContainerHeader = styled.div`
    background: rgb(205, 221, 226);
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
`

export const ImgCard = styled.img`
    width: 100%;
    height: ${props => props.detail ? "20em" : "50%"};
    margin-top: 8px;
`
export const CardList = styled.div`
    height: 100%;
    margin: 4px;
    box-shadow: 2px 2px 5px darkgray;
`

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20rem);
    margin: 20px;
    padding-top: 4px;
`
export const Text = styled.p`
    padding: 4px
`

export const TitleText = styled.h3`
    padding: 4px;
`

export const Input = styled.input`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: ${props => props.login ? "50%" : "200%"};
    padding: ${props => props.login ? "2%" : "5% 2%"}; 
    border-radius: 2rem;
    margin-bottom: 2%;
    border: 2px inset rgb(160, 160, 160);
    background-color: rgb(233, 233, 233);
`

export const Select = styled.select`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: ${props => props.login ? "55%" : "205%"}; 
    padding: ${props => props.login ? "2%" : "5% 2%"}; 
    border-radius: 2rem;
    margin-bottom: 2%;
    border: 2px inset rgb(160, 160, 160);
    background-color: rgb(233, 233, 233);
`

export const ContainerInput = styled.form`
    display: flex;
    justify-items: center;
    align-items:center;
    flex-direction: column;
    margin: 1em 30px;
`

export const ImgTrash = styled.img`
    width: 30px;
    justify-self: flex-end;
    cursor:pointer;
`
export const AdminList = styled.div`
    display: grid;
    grid-template-columns: 2em 1fr 2em;
    align-items: center;
`
export const TextAdmin = styled.h3`
    padding: 0 38px;
    cursor:pointer;
`

export const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

export const StyledBadgeRed = withStyles((theme) => ({
    badge: {
        backgroundColor: 'red',
        color: 'red',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

export const Avatar = styled.p`
    font-size: ${props => props.text || props.name ? "20px" : "25px"};
    padding: 0;
    margin:${props => props.text ? "4px 8px 0" : "12px 3px"};
    display: ${props => props.name ? "inline-flexbox" : "auto"}
`

export const Section = styled.section`
    display: ${props => props.avatar ? "flex" : "flexbox"};
    flex-direction: ${props => props.avatar ? "column" : "auto"};
    margin-bottom:${props => props.bottom ? "30px" : 'auto'};
`

export const ContainerDetail = styled.section`
    display: flex;
    width: 30%;
`
