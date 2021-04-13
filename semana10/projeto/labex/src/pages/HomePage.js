import React from 'react'
import { useStyles, Titulo, Container } from '../styles/style'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { images } from '../constants/image'
import { useHistory } from 'react-router';
import { goToLogin, goToTripList } from '../Router/coordinator'

function HomePage() {
    const history = useHistory()
    const classes = useStyles()

    const handleClick = (item) => {
        item === 'Login' ? (
            goToLogin(history)
        ) : (
            goToTripList(history)
        )
    }

    return (
        <Container>
            <Titulo>LabeX</Titulo>

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
                        onClick={() => handleClick(image.title)}
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