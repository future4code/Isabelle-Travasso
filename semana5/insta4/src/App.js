import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const estiloFormulario = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 12px;
`

class App extends React.Component {

  state = {

    arrayPost: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Tati',
        fotoUsuario: 'https://picsum.photos/50/54',
        fotoPost: 'https://picsum.photos/200/154'
      },
      {
        nomeUsuario: 'osmar',
        fotoUsuario: 'https://picsum.photos/50/59',
        fotoPost: 'https://picsum.photos/200/157'
      }
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""

  }


  // Copiando array e adicionando o novo post

  adicionaPost = () => {
    const novoPosts = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }


    const novoPost = [...this.state.arrayPost, novoPosts];

    this.setState({ arrayPost: novoPost, inputFotoPost: "", inputFotoUsuario: "", inputNomeUsuario: "" })
  }

  onChangeNomeUsuario = (evento) => {
    this.setState({ inputNomeUsuario: evento.target.value })
  }
  onChangeFotoUsuario = (evento) => {
    this.setState({ inputFotoUsuario: evento.target.value })
  }
  onChangeFotoPost = (evento) => {
    this.setState({ inputFotoPost: evento.target.value })
  }


  render() {

    const postComConteudo = this.state.arrayPost.map((posts) => {

      return (
        <div className={'app-container'} key={posts.nomeUsuario}>

          <Post
            nomeUsuario={posts.nomeUsuario}
            fotoUsuario={posts.fotoUsuario}
            fotoPost={posts.fotoPost}
          />

          {/* Modelo Antigo nao quis apagar */}
          {/*
              <Post
                nomeUsuario={'Tati'}
                fotoUsuario={'https://picsum.photos/50/54'}
                fotoPost={'https://picsum.photos/200/154'}
              />
              <Post
                nomeUsuario={'osmar'}
                fotoUsuario={'https://picsum.photos/50/59'}
                fotoPost={'https://picsum.photos/200/157'}
              /> */}

          {/* Fim do modelo antigo */}
        </div>
      )
    })

    return (
      <div>
        <estiloFormulario>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Foto do Usuário"}
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"Imagem para Postagem"}
          />

          <button onClick={this.adicionaPost}>Adicionar</button>
        </estiloFormulario>
        {postComConteudo}
      </div>
    )

  }
}

export default App;
