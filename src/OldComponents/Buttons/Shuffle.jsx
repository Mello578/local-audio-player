import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shufflePlaylistAction } from '../../store/actions/playlistActions';
import { shuffle } from '../../utils/shufflePlaylist';

export class ShuffleButton extends Component {
    shuffledPlaylist() {
        if (this.props.visible) {
            const currentPlaylist = this.props.data.map(item => item);
            const shuffledCurrentPlaylist = currentPlaylist.length > 2 ? shuffle(currentPlaylist) : currentPlaylist;
            const shuffleAction = shufflePlaylistAction(shuffledCurrentPlaylist);
            this.props.shuffled(shuffleAction);
        }
    }

    render() {
        return <button className={'button button-shuffle'} onClick={() => this.shuffledPlaylist()} />;
    }
}

export const Shuffle = connect(
    ({ playlistReducer }) => ({
        data: playlistReducer.data,
        visible: playlistReducer.visible
    }),
    dispatch => ({
        shuffled(playlist) {
            dispatch({ type: playlist.type, payload: playlist.data });
        }
    })
)(ShuffleButton);
