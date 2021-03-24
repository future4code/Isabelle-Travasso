import React from 'react';
import './App.css';
import Register from './Components/Register'
import UsersList from './Components/UsersList'


export default class App extends React.Component {

  state = {
    register: true
  }

  changePage = () => {
    this.setState({ register: !this.state.register })
  }

  render() {
    const page = () => {
      if( this.state.registers) {
       return <Register nextPage={this.changePage}/> 
       } else {
       return  <UsersList nextPage={this.changePage}/>
       }
      }


    return (
      <div>

        <div >
          {page()}
        </div>
        

      </div >
    )
  }

}