import React, { Component } from 'react';
import { connect } from 'react-redux';

import { audioController, startPauseStopPlay } from '../../../utils/startStopPlay';
import { playTrack } from '../../../store/actions/playerControlAction';
import { TRACK_PLAY } from '../../../constants/playerConst';

export class PlayButton extends Component {
    play() {
        const track = audioController
            ? audioController.characteristic
            : this.props.tracksPlaylist
                ? this.props.tracksPlaylist[0]
                : false;
        if (track) {
            const playTrackAction = playTrack(track);
            this.props.played(playTrackAction);
        }
        startPauseStopPlay(track, TRACK_PLAY, this.props.tracksPlaylist);
    }

    render() {
        return <button className={'button button-play'} onClick={() => this.play()} />;
    }
}

export const Play = connect(
    ({ playlistReducer }) => ({
        tracksPlaylist: playlistReducer.data
    }),
    dispatch => ({
        played(track) {
            dispatch(track);
        }
    })
)(PlayButton);
