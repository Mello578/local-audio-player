import React from 'react';

import { PlayerHeader } from '../Components/PlayerHeader';
import { PlayerBody } from '../Containers/PlayerBody';
import { PanelsControl } from '../Containers/PanelsControl';

import style from './Player.module.less';

export const Player: React.FC = () => (
    <div className={style.player}>
        <PlayerHeader />
        <PlayerBody />
        <PanelsControl />
    </div>
);
