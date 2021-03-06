import * as  React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import Button from '@material-ui/core/Button'
import { mdiAccountArrowLeft, mdiAccountHeart } from '@mdi/js'
import Badge from '@material-ui/core/Badge'

import Astromatch from './Astromatch/Astromatch'
import Matches from './Matches/Matches'
import { baseUrlPut, baseUrlMatch } from '../parameters'
import { MatchIcon, Logo, ContainerLogo, useStyles, MachesNumber } from './Style'
import { Container } from './Astromatch/Style'

export function AppContainer(props) {

    const classes = useStyles();

    const [page, setPage] = useState('AppContainer')
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [matches]);

    const renderPage = () => {
        switch (page) {
            case 'AppContainer':
                return <Astromatch />
            case 'Match':
                return <Matches
                    matches={matches}
                    setMatches={setMatches}
                    getMatches={getMatches}
                />
        }
    }

    const getMatches = async () => {

        try {
            const res = await axios.get(baseUrlMatch)
            setMatches(res.data.matches)
        } catch (err) {
            alert("Não foram encontrados Matchs na sua conta")
        }
    }

    const changePage = (newPage) => { setPage(newPage) }

    const openPage = () => {
        if (page === 'AppContainer') {
            return (
                <ContainerLogo>
                    <Logo>astro<Logo match>match</Logo></Logo>
                    <Badge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={<MachesNumber>{matches.length}</MachesNumber>}
                    >
                        <MatchIcon><Icon className={classes.root} size={1} path={mdiAccountHeart} onClick={() => changePage('Match')} /></MatchIcon>
                    </Badge>
                </ContainerLogo>

            )
        } else if (page === 'Match') {
            return (
                <ContainerLogo matches>
                    <Logo>astro<Logo match>match</Logo></Logo>
                    <MatchIcon className={classes.root}><Icon size={1} path={mdiAccountArrowLeft} onClick={() => changePage('AppContainer')} /></MatchIcon>
                </ContainerLogo>
            )
        }
    }

    const clearProfiles = async () => {
        try {
            await axios.put(baseUrlPut)
            alert("Limpeza realizada com sucesso 👍")
        } catch (err) {
            alert(" ❌ Erro, Tente novamente mais tarde")
        }
    }

    return (
        <Container>
            {openPage()}
            {renderPage()}
            <Button variant="contained" onClick={clearProfiles}>limpar swipes e matches</Button>
        </Container>
    )

}

export default AppContainer