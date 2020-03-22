import React from 'react';
import { connect } from 'react-redux';
import { playTrack } from 'store';
import { audioController, startPauseStopPlay } from 'src/utils/startStopPlay';
import { TRACK_NEXT, TRACK_PLAY, TRACK_PREVIOUS } from 'src/constants';

import {
    NextTrackDispatchModel,
    NextTrackStateModel,
    mapDispatchToPropsNextTrack,
    mapStateToPropsNextTrack
} from './propsComponent';
import style from './NextTrack.module.less';

interface FollowingModel extends NextTrackStateModel, NextTrackDispatchModel {
    isPrevious: boolean;
}

const NextTrackComponent: React.FC<FollowingModel> = ({ played, tracksPlaylist, isPrevious }) => {
    const nextTrack = () => {
        const nextTrack = audioController.nextTrack(isPrevious ? TRACK_PREVIOUS : TRACK_NEXT);
        if (nextTrack) {
            const playTrackAction = playTrack(nextTrack);
            played(playTrackAction);

            startPauseStopPlay(nextTrack, TRACK_PLAY, tracksPlaylist);
        }
    };

    const nextTrackClasses = `button ${isPrevious ? style.previous : style.following}`;

    return <button className={nextTrackClasses} onClick={nextTrack} />;
};

export const NextTrack = connect(
    mapStateToPropsNextTrack,
    mapDispatchToPropsNextTrack
)(NextTrackComponent);
