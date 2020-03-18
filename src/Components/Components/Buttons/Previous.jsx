import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playTrack } from '../../../store/actions/playerControlAction';
import { audioController, startPauseStopPlay } from '../../../utils/startStopPlay';
import { TRACK_PLAY, TRACK_PREVIOUS } from '../../../constants/playerConst';

class PreviousButton extends Component {
    previous() {
        const nextTrack = audioController.nextTrack(TRACK_PREVIOUS);
        if (nextTrack) {
            const playTrackAction = playTrack(nextTrack);
            this.props.played(playTrackAction);

            startPauseStopPlay(nextTrack, TRACK_PLAY, this.props.tracksPlaylist);
        }
    }

    render() {
        return <button className={'button button-previous'} onClick={() => this.previous()} />;
    }
}

export const Previous = connect(
    ({ playlistReducer }) => ({
        tracksPlaylist: playlistReducer.data
    }),
    dispatch => ({
        played(track) {
            dispatch({ type: track.type, payload: track.data });
        }
    })
)(PreviousButton);
