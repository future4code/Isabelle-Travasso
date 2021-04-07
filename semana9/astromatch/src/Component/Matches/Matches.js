import axios from 'axios';
import { baseUrlMatch } from '../../parameters'
import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContainerWhite } from '../Astromatch/Style'
import { Text, useStyles, StyledBadge, options } from './Style'
import Avatar from '@material-ui/core/Avatar';

export function Matches() {

    const classes = useStyles();

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, []);

    useEffect(() => {
        document.title = `Você tem ${matches.length} matches`;
    }, [matches]);

    const getMatches = async () => {

        try {
            const res = await axios.get(baseUrlMatch)

            setMatches(res.data.matches)
        } catch (err) {
            alert("Não foram encontrados Matchs na sua conta")
        }
    }


    useEffect(() => {
        if(matches.length === 0){
        const timer = setTimeout(() => {
            alert("🤔 Você ainda não possui matches, volte para a tela de perfis")
        }, 2000);
        return () => clearTimeout(timer);
    } 
    }, [matches]);

    return (
        <ContainerWhite>

            {matches.length !== 0 ? (

                matches.map((match) => {
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
                                <Avatar alt="Remy Sharp" src={match.photo} />
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