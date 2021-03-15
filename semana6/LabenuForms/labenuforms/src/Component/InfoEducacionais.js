import Perguntas from './Perguntas';
import React from 'react';


class InfoEducacionais extends React.Component {
    

    render() {
        return (
            <div>
                <h1> Informações Educacionais </h1>
                <Perguntas pergunta={"5. Qual o curso?"} />
                <Perguntas pergunta={"6. Qual a unidade de ensino?"} />
            </div>
        )
    }

}

export default InfoEducacionais;
