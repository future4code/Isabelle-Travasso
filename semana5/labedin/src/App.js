import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemEu from './img/IMG_20150214_212904-sem fundo.png';
import Email from './img/email.png'
import Home from './img/home.png'
import Coats from './img/coats.png'
import Purewater from './img/purewater.png'
import ETEC from './img/ETEC.png'
import Labenu from './img/Labenu.png'
import MBA from './img/MBA.png'
import FASB from './img/FASB.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemEu}
          nome="Isabelle"
          descricao="Sou uma química tech, me desenvolvendo para o futuro!
          Transformo rotinas quadradas em algo prático e flexível. E quando não estou trabalhando ou estudando, você pode me ver viajando ou me encontrar assistindo filmes e series."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      
      <div className="page-section-container">
        <h2>Onde me encontrar</h2>
        <CardPequeno
          icone={Email}
          nome = "E-mail"
          conteudo="isa.frederico@gmail.com"
        />

        <CardPequeno
          icone={Home}
          nome = "Endereço"
          conteudo="Rua xxxx, nº 546 - Pq. xxxx - SP"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Coats}
          nome="Coats Corrente"
          descricao="
          Controle de qualidade de produtos.
          Inspeção de processo fabril.
          Análise e resposta de reclamações com utilização do sistema SAP.
          Criação de ferramentas para melhoria de processos.
          Homologação de fornecedores.
          Revisão de normas e procedimentos operacionais.
          Elaboração de relatórios.
          Auxilio no desenvolvimento de novos produtos.
          Analise e otimização de procedimentos laboratoriais."
        />

        <CardGrande
          imagem={Purewater}
          nome="Purewater Controle de Efluentes"
          descricao="Elaboração de relatórios técnicos e adaptação de procedimentos. Programação,
          logística e planejamento de produção e entrega.
          Elaboração, planejamento e melhoria de processos.
          Controle de estoque e de produtos controlados.
          Registro de Mapa da Policia Civil e Federal."
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>

        <CardGrande
          imagem={Labenu}
          nome="Labenu"
          descricao="Web Full Stack - 01/2020 a 07/2020"
        />

        <CardGrande
          imagem={MBA}
          nome="MBA USP Esalq"
          descricao="MBA Data Science e Analytics - 2020 a 2022"
        />

        <CardGrande
          imagem={FASB}
          nome="FASB - Faculdade São Bernardo"
          descricao="Bacharelado, Química - 2016 a 2019"
        />

        <CardGrande
          imagem={ETEC}
          nome="ETEC Getúlio Vargas"
          descricao="Curso Técnico, Química - 2014 a 2015"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>

    </div>
  );
}

export default App;
