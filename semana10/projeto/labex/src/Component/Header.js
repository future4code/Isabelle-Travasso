import React from 'react';
import { HomeIcon, Button, ContainerHeader } from '../styles/style'
import { goToHomePage, gotToLastPage, goToApplicationPage, goToHomeAdmin } from '../Router/coordinator';
import { useHistory } from 'react-router';
import home from '../img/home.png'


function Header() {
    const history = useHistory()

    const buttonNav = () => {
        switch (history.location.pathname) {
            case '/trips/list':
                return (
                    <div>
                        <Button onClick={() => gotToLastPage(history)}>Voltar</Button>
                        <Button onClick={() => goToApplicationPage(history)}>Inscreva-se</Button>
                    </div>
                )
            case 'admin/trips/list':
                    return (
                        <div>
                            <Button onClick={() => gotToLastPage(history)}>Voltar</Button>
                            <Button onClick={() => goToHomeAdmin(history)}>Logout</Button>
                        </div>
                    )
            default:
                return (
                    <div>
                        <Button onClick={() => gotToLastPage(history)}>Voltar</Button>
                    </div>
                )
        }

    }

    return (
        <div>
                    <ContainerHeader >
                        <HomeIcon src={home} onClick={() => goToHomePage(history)}></HomeIcon>
                        {buttonNav()}
                    </ContainerHeader>
        </div>
    )
}

export default Header