import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="contato">
            <img src={ props.icone } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.conteudo }</p>
            </div>
        </div>
    )
}

export default CardPequeno;