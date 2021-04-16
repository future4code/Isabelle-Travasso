import React from 'react'
import errorImg from '../../img/404.jpg'
import { ErrorDiv, ImgError } from '../../styles/style'

function ErrorPage() {

    return (
        <ErrorDiv className="erros">
            <ImgError alt="Erro 404" src={errorImg}></ImgError>
        </ErrorDiv>

    )

}

export default ErrorPage