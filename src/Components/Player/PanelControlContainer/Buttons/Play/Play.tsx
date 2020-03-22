import React from 'react';
import { connect } from 'react-redux';
import { audioController, startPauseStopPlay } from 'src/utils/startStopPlay';
import { playTrack } from 'src/store/actions/playerControlAction';
import { TRACK_PLAY } from 'src/constants/playerConst';

import { mapDispatchToPropsPlay, mapStateToPropsPlay, PlayDispatchModel, PlayStateModel } from './propsComponent';
import style from './Play.module.less';

interface PlayModel extends PlayStateModel, PlayDispatchModel {}

export const PlayComponent: React.FC<PlayModel> = ({ tracksPlaylist, played }) => {
    const play = () => {
        const track = audioController ? audioController.characteristic : tracksPlaylist ? tracksPlaylist[0] : false;
        if (track) {
            played(playTrack(track));
        }
        startPauseStopPlay(track, TRACK_PLAY, tracksPlaylist);
    };

    return <button className={`button ${style.play}`} onClick={play} />;
};

export const Play = connect(
    mapStateToPropsPlay,
    mapDispatchToPropsPlay
)(PlayComponent);
