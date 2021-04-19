import React from 'react';
import { HomeIcon, Button, ContainerHeader } from '../styles/style'
import { goToTripCreate, goToHomePage, gotToLastPage, goToApplicationPage, goToLogin } from '../Router/coordinator';
import { useHistory } from 'react-router';
import home from '../img/home.png'


function Header() {
    const history = useHistory()

    const logout = () => {
        window.localStorage.removeItem("token");
        goToLogin(history);
      };

    const buttonNav = () => {
        switch (history.location.pathname) {
            case '/trips/list':
                return (
                    <div>
                        <Button onClick={() => gotToLastPage(history)}>Voltar</Button>
                        <Button onClick={() => goToApplicationPage(history)}>Inscreva-se</Button>
                    </div>
                )
            case '/admin/trips/list':
                    return (
                        <div>
                            <Button onClick={() => goToTripCreate(history)}>Adicionar</Button>
                            <Button onClick={logout}>Logout</Button>
                        </div>
                    )
            default:
                return (
                    <div>
                        <Button back onClick={() => gotToLastPage(history)}>Voltar</Button>
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