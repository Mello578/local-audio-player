import React from 'react';
import { connect } from 'react-redux';
import { playTrack } from 'src/store/actions/playerControlAction';
import { audioController, startPauseStopPlay } from 'src/utils/startStopPlay';
import { TRACK_NEXT, TRACK_PLAY } from 'src/constants/playerConst';
import {
    FollowDispatchModel,
    FollowStateModel,
    mapDispatchToPropsFollowing,
    mapStateToPropsFollowing
} from 'src/Components/Player/PanelControlContainer/Buttons/Following/propsComponent';

import style from './Following.module.less';

interface FollowingModel extends FollowStateModel, FollowDispatchModel {}

const FollowingComponent: React.FC<FollowingModel> = ({ played, tracksPlaylist }) => {
    const nextTrack = () => {
        const nextTrack = audioController.nextTrack(TRACK_NEXT);
        if (nextTrack) {
            const playTrackAction = playTrack(nextTrack);
            played(playTrackAction);

            startPauseStopPlay(nextTrack, TRACK_PLAY, tracksPlaylist);
        }
    };

    return <button className={`button ${style.following}`} onClick={nextTrack} />;
};

export const Following = connect(
    mapStateToPropsFollowing,
    mapDispatchToPropsFollowing
)(FollowingComponent);
