import React from 'react';
import { ConnectedTrackInfo } from 'src/Components/Connected/TrackInfo';

import { PlayerBody } from '../Containers/PlayerBody';
import { PanelsControl } from '../Containers/PanelsControl';

import style from './Player.module.less';

export const Player: React.FC = () => (
    <div className={style.player}>
        <ConnectedTrackInfo />
        <PlayerBody />
        <PanelsControl />
    </div>
);
