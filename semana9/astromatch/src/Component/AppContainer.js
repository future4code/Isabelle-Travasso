import React, { useState } from 'react'
import Astromatch from './Astromatch/Astromatch'
import Matches from './Matches/Matches'
import { baseUrlPut } from '../parameters'
import { mdiAccountHeart } from '@mdi/js'
import Icon from '@mdi/react'
import {MatchIcon, Logo, ContainerLogo} from './Style'
import axios from 'axios';
import { Container } from '../Component/Astromatch/style'

export function AppContainer(props) {
    const [page, setPage] = useState('AppContainer')


    const renderPage = () => {
        switch (page) {
            case 'AppContainer':
                return <Astromatch />
            case 'Match':
                return <Matches />
        }
    }

    const matchPage = () => {
        setPage('Match')
    }

    const astomatchPage = () => {
        setPage('AppContainer')
    }


    const openPage = () => {
        if (page === 'AppContainer') {
            return (
                <ContainerLogo>
                    <Logo>astromatch</Logo>
                    <MatchIcon><Icon size={1} path={mdiAccountHeart} onClick={matchPage}/></MatchIcon>
                </ContainerLogo>
            )
        } else if (page === 'Match') {
            return <button onClick={astomatchPage}>Voltar</button>
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
            <button onClick={clearProfiles}>limpar swipes e matches</button>
        </Container>
    )

}

export default AppContainer