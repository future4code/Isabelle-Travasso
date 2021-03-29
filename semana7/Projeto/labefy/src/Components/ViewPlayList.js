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

    backTracks = () => {
        this.setState({ addTrackOpen: false })
    }

    render() {
        return (
            <div>
                <h3>{this.props.playListName}</h3>
                {this.state.addTrackOpen ? <AddTrack 
                backTracks={this.state.addTrackOpen}
                /> : (
                    <div>
                        <button onClick={this.props.backPlaylists}>Voltar</button>
                        <button onClick={() => this.onClickAdd()} > + </button>
                        {this.props.tracks.map(list => {
                            return (
                                <div>
                                    <p>{list.artist} - {list.name}</p>
                                    <audio src={list.url} controls="controls" />
                                    <button onClick={this.props.deleteTrack}>X</button>
                                </div>
                            )
                        })}
                        
                    </div>
                )
                }
            </div>
        )

    }

}
export default ViewPlayList