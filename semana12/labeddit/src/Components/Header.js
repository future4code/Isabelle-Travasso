import React from 'react';
import { Text, HomeIcon, Button, ContainerHeader } from '../Styles/style'
import { goToRegister, goToFeed, goToAddPosts, gotToLastPage, goToLogin } from '../Router/coordinator';
import { useHistory } from 'react-router';
import labedditLogo from '../img/labeddit-logo.png'

function Header() {
    const history = useHistory()
    
    const logout = () => {
        window.localStorage.removeItem("token");
        goToLogin(history);
    };

    const buttonNav = () => {
        switch (history.location.pathname) {
            case '/':
                return (
                    <div>
                        <Button onClick={() => goToRegister(history)}>Inscreva-se</Button>
                    </div>
                )
            case '/signup':
                return (
                    <div>
                        <Button onClick={() => goToLogin(history)}>Login</Button>
                    </div>
                )
            case '/feed':
                return (
                    <div>
                        <Button onClick={() => goToAddPosts(history)}>Criar Post</Button>
                        <Button logout onClick={logout}>Logout</Button>
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
                <HomeIcon src={labedditLogo} onClick={() => goToFeed(history)}></HomeIcon>
                <Text reader bold>LabEddit</Text>
                {buttonNav()}
            </ContainerHeader>
        </div>
    )
}

export default Header