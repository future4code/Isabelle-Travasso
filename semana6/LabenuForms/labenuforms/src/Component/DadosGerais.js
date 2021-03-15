import Perguntas from './Perguntas';
import Opcoes from './Opcoes';
import React from 'react';


class DadosGerais extends React.Component {

    
    render() {
        return (
            <div>
                <h1> Dados Gerais </h1>
                <Perguntas pergunta={"1. Qual o seu nome?"} />
                <Perguntas pergunta={"2. Qual sua idade?"} />
                <Perguntas pergunta={"3. Qual seu email?"} />
                <Opcoes
                    pergunta={"4. Qual a sua escolaridade?"}

                    opcoes={["Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]} />
            </div>
        )
    }

}

export default DadosGerais;
