import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Tati'}
          fotoUsuario={'https://picsum.photos/50/54'}
          fotoPost={'https://picsum.photos/200/154'}
        />
        <Post
          nomeUsuario={'osmar'}
          fotoUsuario={'https://picsum.photos/50/59'}
          fotoPost={'https://picsum.photos/200/157'}
        />
      </div>
    );
  }
}

export default App;
