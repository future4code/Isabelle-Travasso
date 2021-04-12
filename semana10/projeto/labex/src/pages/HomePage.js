import React from 'react'
import {useStyles, Logo, Container } from '../styles/homeStyle'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import trip from '../img/viagem.jpg'
import login from '../img/login.jpg'



const images = [
    {
        image: trip,
        title: 'Visualizar viagens',
        width: '40%',
    },
    {
        image: login,
        title: 'Login',
        width: '40%',
    }
]


function HomePage() {

    const classes = useStyles()

    return (
        <Container>
            <Logo>LabeX</Logo>
            <div className={classes.root}>

                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.image})`,
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {image.title}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
        </Container>

    )
}

export default HomePage