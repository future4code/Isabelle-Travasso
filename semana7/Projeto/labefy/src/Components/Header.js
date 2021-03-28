import React from 'react'
import styled from 'styled-components'

const MenuItem = styled.button`
margin: 5px;
padding: 5px;
font-size: 1.3rem;
color: #eeeeee;
background-color:#303841;
border-style: none;
`

const UlMenu = styled.ul`
display: flex;
list-style: none;
`


class Header extends React.Component { 

    render() {
        return (
          <div>
            <MenuItem onClick={this.props.menuHome}>Página inicial</MenuItem>
            <UlMenu>
              <li><MenuItem onClick={this.props.menuFormPlayList}>Criar playlist</MenuItem></li>
            </UlMenu>
          </div>
        )
      }

}

export default Header