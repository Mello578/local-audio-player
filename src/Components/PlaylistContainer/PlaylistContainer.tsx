import React from 'react';

import { PlaylistImages } from './PlaylistImages';
import { PlaylistTracks } from './PlaylistTracks';
import style from './PlaylistContainer.module.less';

export const PlaylistContainer: React.FC = () => {
    return (
        <div className={style.playlistContainer}>
            <PlaylistImages />
            <PlaylistTracks />
        </div>
    );
};
