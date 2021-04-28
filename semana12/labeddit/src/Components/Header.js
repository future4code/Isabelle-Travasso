import React, { useContext } from 'react';
import { Text, HomeIcon, ContainerHeader } from '../Styles/style'
import { goToFeed } from '../Router/coordinator';
import { useHistory } from 'react-router';
import labedditLogo from '../img/labeddit-logo.png'
import GlobalStateContext from '../Global/GlobalStateContext'

function Header() {
    let { requests } = useContext(GlobalStateContext)
    const history = useHistory()

    return (
        <div>
            <ContainerHeader >
                <HomeIcon src={labedditLogo} onClick={() => goToFeed(history)}></HomeIcon>
                <Text reader bold>LabEddit</Text>
                {requests.buttonNav(history.location.pathname)}
            </ContainerHeader>
        </div>
    )
}

export default Header