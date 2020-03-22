import React from 'react';
import { TrackInfo } from 'src/Components/Player/TrackInfo';

import { Vinyl } from './Vinyl';
import { PanelsControlContainer } from './PanelControlContainer';
import style from './Player.module.less';

export const Player: React.FC = () => (
    <div className={style.player}>
        <TrackInfo />
        <Vinyl />
        <PanelsControlContainer />
    </div>
);
