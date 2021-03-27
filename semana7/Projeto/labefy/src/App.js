import PlayList from './Components/PlayList'
import FormPlayList from './Components/FormPlayList'
import React from 'react';
import './App.css';
import ViewPlayList from './Components/ViewPlayList';
import AddTrack from './Components/AddTrack';

export default class App extends React.Component {

state = {
  playListOpen: true,
}

changePage = () => {
  this.setState ({playListOpen: !this.state.playListOpen})
}

  render() {

    const actualPage = () => {
      if(this.state.playListOpen){
        return <PlayList page={this.changePage} />
      } else {
        return <ViewPlayList page={this.changePage} />
      } 
    }
    return (
      <div>
        {actualPage()}
        </div>
     
    )
  }
}



