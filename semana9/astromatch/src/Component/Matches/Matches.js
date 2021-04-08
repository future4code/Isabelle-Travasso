import axios from 'axios';

import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContainerWhite } from '../Astromatch/Style'
import { Text, useStyles, StyledBadge, options } from './Style'
import Avatar from '@material-ui/core/Avatar';

export function Matches(props) {

    const classes = useStyles();

    useEffect(() => {
        props.getMatches()
    }, [props]);

    useEffect(() => {
        document.title = `Você tem ${props.matches.length} matches`;
    }, [props.matches]);


    useEffect(() => {
        if(props.matches.length === 0){
        const timer = setTimeout(() => {
            alert("🤔 Você ainda não possui matches, volte para a tela de perfis")
        }, 2000);
        return () => clearTimeout(timer);
    } 
    }, [props.matches]);

    return (
        <ContainerWhite>

            {props.matches.length !== 0 ? (

                props.matches.map((match) => {
                    return (
                        <div key={match.id} className={classes.avatar}>
                            <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="Avatar profile" src={match.photo} />
                            </StyledBadge>

                            <Text>{match.name}</Text>
                        </div>
                    )
                })

            ) : (

                <div className={classes.root}>
                    <CircularProgress color="secondary" />
                </div>

            )}


        </ContainerWhite>
    )

}



export default Matches