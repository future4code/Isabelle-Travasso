import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvar from '../../img/salvar.png'
import iconeSalvo from '../../img/salvo.png'
import compartilhar from '../../img/share.png'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    compartilhar: false
  }

  onClickCurtida = () => {

    let contabilizaNumeroCurtidas

    if (this.state.curtido) {
      contabilizaNumeroCurtidas = this.state.numeroCurtidas - 1
    } else { contabilizaNumeroCurtidas = this.state.numeroCurtidas + 1 }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: contabilizaNumeroCurtidas
    })
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvar: !this.state.salvar
    })
  }

  // onClickCompartilhar = () => {

  //   let iconeCompartilhar = ["Intagram", "Facebook", "Twitter"]

  //   function Listando(props){
  //     const redes = props.redes;
  //     const listaRedes = redes.map((redes) => 
  //     <li>{redes}</li>);

  //     return(<ul>{listaRedes}</ul>);
  //   }

  //   if(this.state.compartilhar){
  //     Compartilhar = 
  //   }

  //   this.setState({
  //     compartilhar: 
  //   })
  // }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvarPost

    if (this.state.salvar) {
      iconeSalvarPost = iconeSalvo
    } else {
      iconeSalvarPost = iconeSalvar
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        {/* <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        /> */}

        <IconeSemContador
          icone={iconeSalvarPost}
          onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post