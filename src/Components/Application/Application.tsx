import React from 'react';

import { Player } from '../Player';
import { Playlist } from '../Containers/Playlist';

import { setPlaylist } from './utils/setPlaylist';
import style from './Application.module.less';

export const Application: React.FC = () => {
    setPlaylist();

    return (
        <div className={style.container}>
            <Player />
            <Playlist />
        </div>
    );
};
