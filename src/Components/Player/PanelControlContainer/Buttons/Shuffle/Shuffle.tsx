import React from 'react';
import { connect } from 'react-redux';
import { shufflePlaylistAction } from 'store';
import { shuffle } from 'src/utils/shufflePlaylist';

import {
    mapDispatchToPropsShuffle,
    mapStateToPropsShuffle,
    ShuffleDispatchModel,
    ShuffleStateModel
} from './propsComponent';
import style from './Shuffle.module.less';

interface ShuffleModel extends ShuffleStateModel, ShuffleDispatchModel {}

const ShuffleComponent: React.FC<ShuffleModel> = ({ trackList, visible, shuffled }) => {
    const shuffledPlaylist = () => {
        if (visible) {
            const shuffledCurrentPlaylist = trackList.length > 2 ? shuffle(trackList) : trackList;
            shuffled(shufflePlaylistAction(shuffledCurrentPlaylist));
        }
    };

    return <button className={`button ${style.shuffle}`} onClick={shuffledPlaylist} />;
};

export const Shuffle = connect(
    mapStateToPropsShuffle,
    mapDispatchToPropsShuffle
)(ShuffleComponent);
