import React, { useState } from 'react'
import Astromatch from './Astromatch/Astromatch'
import Matches from './Matches/Matches'
import { baseUrlPut } from '../parameters'
import { mdiAccountHeart } from '@mdi/js'
import Icon from '@mdi/react'
import {MatchIcon} from './Style'
import axios from 'axios';

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
                <div>
                    <MatchIcon><Icon size={2} path={mdiAccountHeart} onClick={matchPage}/></MatchIcon>
                    <Astromatch />
                </div>
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
        <div>
            <h2>astromatch</h2>
            {openPage()}
            {renderPage()}
            <button onClick={clearProfiles}>limpar swipes e matches</button>
        </div>
    )

}

export default AppContainer