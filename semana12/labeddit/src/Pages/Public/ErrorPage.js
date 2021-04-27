import React from 'react';
import { Title, Container } from '../../Styles/style';
import labedditLogo from '../../img/labeddit-logo.png'

function Error() {
    
    return (
        <Container>
           
           <img src={labedditLogo} alt='Logo' />
           <Title error>Ooops! Erro 404</Title>
           <Title error>Página não encontrada</Title>
           
        </Container>
    )
}

export default Error