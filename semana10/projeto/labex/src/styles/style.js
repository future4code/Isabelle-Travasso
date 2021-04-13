import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

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
}));

export const Titulo = styled.h1`
    color: #fff;
    font-size: 40px;
    font-family: cursive;
`
export const Container = styled.div`
   display: flex;
   flex-direction:column;
   align-items:center;
   justify-content: center;
   align-content:center;
   margin-top: 2em
`

export const useStylesTheme = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 800,
        height: 550,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },

    paperIconHome: {
        background: 'rgb(205, 221, 226)',
        display: 'grid',

    }

}));

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
    width:100%;
    height: 100%
`