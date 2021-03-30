import React from 'react';
// import styled from 'styled-components';



class AddTrack extends React.Component {

    render() {
        return (
            <div>
                <h4>Adicione mais músicas a sua playlist</h4>
                <label>Nome</label>
                <input
                    type="text"
                    value={this.props.inputName}
                    placeholder="Nome da Musica"
                    onChange={this.props.onchangeInputName}
                />
                <label>Cantor ou Banda</label>
                <input
                    type="text"
                    value={this.props.inputArtist}
                    placeholder="Nome do cantor ou banda"
                    onChange={this.props.onchangeInputArtist}
                />
                <label>Música</label>
                <input
                    value={this.props.inputUrl}
                    placeholder="Link da musica"
                    onChange={this.props.onchangeInputUrl}
                />

                <section>
                    <button onClick={this.props.enviarTrack}>Adicionar</button>

                    <button onClick={this.props.backTracks}>Voltar</button>
                </section>
            </div>
        )
    }
}

export default AddTrack