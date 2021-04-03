import React, { Component } from 'react'
import PlayList from './PlayList'
import FormPlayList from './FormPlayList'
import styled from 'styled-components';
import HomePage from '../img/apple-music-1.jpg'

const ButtonAddPlaylist = styled.span`
color: #fafaf5;
cursor: pointer;
font-family: monospace;
font-size: 20px
`
const DivButton = styled.div`
margin: 2% 2% 0;
`
const DivImg = styled.div`
display:flex;
justify-content:center
`

const ImgHome = styled.img`
width: 40%;
`

export class AppContainer extends Component {
  state = {
    page: 'Home'

  }

  renderPage = () => {
    switch (this.state.page) {
      case 'Home':
        return <PlayList />
      case 'FormPlayList':
        return <FormPlayList />
    }
  }

  menuHome = () => {
    this.setState({ page: 'Home' })
  }

  menuFormPlayList = () => {
    this.setState({ page: 'FormPlayList' })
  }

  render() {
    const openPage = () => {
      if (this.state.page === 'Home') {
        return (
          <div>
            <DivButton>
              <ButtonAddPlaylist onClick={this.menuFormPlayList}>Adicionar PlayList</ButtonAddPlaylist>
            </DivButton>
            <DivImg>
              <ImgHome src={HomePage}></ImgHome>
            </DivImg>
          </div>
        )
      } else if (this.state.page === 'FormPlayList') {
        return (
          <DivButton>
            <ButtonAddPlaylist onClick={this.menuHome}>Minhas PlayLists</ButtonAddPlaylist>
          </DivButton>
        )

      }
    }

    return (
      <div>
        {openPage()}
        {this.renderPage()}
      </div>
    )
  }
}