import React from 'react';
// import styled from 'styled-components';
import AddTrack from './AddTrack';


class ViewPlayList extends React.Component {
    state = {
        addTrackOpen: false,
    }

    getplayListTracks = () => {
        this.props.getplayListTracks()
    }

    onClickAdd = () => {
        this.setState({ addTrackOpen: true })
    }

    render() {
        return (
            <div>
                <h3>{this.props.playListName}</h3>
                <button onClick={() => this.onClickAdd()} > + </button>
                {this.state.addTrackOpen ? <AddTrack /> : (
                    <div>
                        {this.props.tracks.map(list => {
                            return (
                                <div>
                                    <p>{list.artist} - {list.name}</p>
                                    <audio src={list.url} controls="controls" />
                                    <button onClick={this.props.deleteTrack}>X</button>
                                </div>
                            )
                        })}
                        <button onClick={this.props.backPlaylists}>Voltar</button>
                    </div>
                )
                }
            </div>
        )

    }

}
export default ViewPlayList