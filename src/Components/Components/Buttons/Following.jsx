import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playTrack } from '../../../store/actions/playerControlAction';
import { audioController, startPauseStopPlay } from '../../../utils/startStopPlay';
import { TRACK_NEXT, TRACK_PLAY } from "../../../constants/playerConst";

class FollowingButton extends Component {
    nextTrack() {
        const nextTrack = audioController.nextTrack(TRACK_NEXT);
        if (nextTrack) {
            const playTrackAction = playTrack(nextTrack);
            this.props.played(playTrackAction);

            startPauseStopPlay(nextTrack, TRACK_PLAY, this.props.tracksPlaylist);
        }
    }

    render() {
        return <button className={'button button-following'} onClick={() => this.nextTrack()} />;
    }
}

export const Following = connect(
    ({ playlistReducer }) => ({
        tracksPlaylist: playlistReducer.data
    }),
    dispatch => ({
        played(track) {
            dispatch(track);
        }
    })
)(FollowingButton);
