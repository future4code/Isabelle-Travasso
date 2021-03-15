import './App.css';
import DadosGerais from './Component/DadosGerais';
import FimDoForm from './Component/FimDoForm';
import InfoEducacionais from './Component/InfoEducacionais';
import InfoNaoEducacionais from './Component/InfoNaoEducacionais';
import React from 'react';
import styled from 'styled-components'

const EspacoBotao = styled.div`
    display: flex;
    justify-items: center;
    justify-content: space-between;
`

class App extends React.Component {
  state = {
    pagina: 1
  }

  mostrarPagina = () => {
    switch (this.state.pagina){
      case 1:
        return <DadosGerais />;
      case 2:
      return <InfoEducacionais />;
      case 3:
      return <InfoNaoEducacionais />;
      case 4:
      return <FimDoForm />;
      default: 
      return <FimDoForm />;
    }
  }

  proximaPagina = () => {
    this.setState({ pagina: this.state.pagina + 1 });
  };

  voltarPagina = () => {
    this.setState({ pagina: this.state.pagina - 1 });
  };

  
    render() {
        return (
            <div>
              {this.mostrarPagina()}
              <br />
              <EspacoBotao>
              {this.state.pagina !== 4 && (<button onClick={this.proximaPagina}>Próxima etapa</button> )} 
              {this.state.pagina !== 1 && (<button onClick={this.voltarPagina}>Voltar</button>)}
              </EspacoBotao>
            </div>
        )
    }

}

export default App;