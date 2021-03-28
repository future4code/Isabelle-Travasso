import React from 'react'
import Header from './Header'
import PlayList from './PlayList'
import FormPlayList from   './FormPlayList'
import Body from './Body'

export default class Home extends React.Component {
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
        this.setState({page: 'Home'})
      }
    
    menuFormPlayList = () => {
        this.setState({page: 'FormPlayList'})
      }

    
      render() {
        return (
          <div>
            <Header 
            menuHome={this.menuHome}
            menuFormPlayList={this.menuFormPlayList}
            />
            
            <Body content={this.renderPage()} />
          </div>
        )
      }
    }