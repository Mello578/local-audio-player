import React from 'react';

import { PlaylistTracks } from '../Components/PlaylistTracks';
import { PlaylistImages } from '../PlaylistImages';

import style from './PlaylistContainer.module.less';

export const PlaylistContainer: React.FC = () => {
    return (
        <div className={style.playlistContainer}>
            <PlaylistImages />
            <PlaylistTracks />
        </div>
    );
};
