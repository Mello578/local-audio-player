import React from 'react';
import { PlaylistContainer } from 'src/Components/PlaylistContainer';

import { Player } from '../Player';

import { setPlaylist } from './utils/setPlaylist';
import style from './Application.module.less';

export const Application: React.FC = () => {
    setPlaylist();

    return (
        <div className={style.container}>
            <Player />
            <PlaylistContainer />
        </div>
    );
};
