import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'
// import { IconeCompartilhar } from '../IconeCompartilhar/IconeCompartilhar'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvar from '../../img/salvar.png'
import iconeSalvo from '../../img/salvo.png'
// import iconeCompartilhar from '../../img/share.png'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    // compartilhar: false
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
      compartilhar: false,
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvar: !this.state.salvar
    })
  }

  // aoClicarCompartilhar = () => {
  //   this.setState({
  //     compartilhar: !this.state.compartilhar
  //   })
  // }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    // let componenteCompartilhar

    // if (this.state.compartilhar) {
    //   componenteCompartilhar = <IconeCompartilhar aoClicar={this.aoClicarCompartilhar} />
    // }

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

        {/* <IconeCompartilhar
          icone={compartilhar}
          onClickIcone={componenteCompartilhar}
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