import Perguntas from './Perguntas';
import Opcoes from './Opcoes';
import React from 'react';


class InfoNaoEducacionais extends React.Component {
    render() {

        return (
            <div>
                <h1> Informações Educacionais </h1>
                <Perguntas 
                onChange={this.salvaMotivo}
                pergunta={"5. Por que você não terminou um curso de graduação?"} />
                <Opcoes
                    onChange={this.salvaCursoComplementar}
                    pergunta={"6. Você fez algum curso complementar?"}
                    tipo={"selecao"}
                    opcoes={["Curso técnico",
                        "Curso de inglês",
                        "Não fiz curso complementar"
                    ]} />
            </div>
        )
    }

}

export default InfoNaoEducacionais;
