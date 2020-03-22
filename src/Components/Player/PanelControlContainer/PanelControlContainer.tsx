import React from 'react';

import { NextTrack, VolumeMute, Repeat, Pause, Play, Shuffle } from './Buttons';
import { VolumeSlider } from './Volume/VolumeSlider';
import { VolumeNumber, VolumeIndicator } from './Volume';
import style from './PanelsControl.module.less';

export const PanelsControlContainer: React.FC = () => {
    return (
        <div className={style.panelControl}>
            <div className={style.buttonsControl}>
                <Repeat />
                <NextTrack isPrevious={true} />
                <Play />
                <NextTrack isPrevious={false} />
                <Shuffle />
            </div>
            <div className={style.volumeControls}>
                <VolumeMute isAdditional={false} />
                <VolumeIndicator />
                <VolumeSlider />
                <VolumeNumber />
            </div>
            <div className={style.additionallyButtons}>
                <VolumeMute isAdditional={true} />
                <Pause />
            </div>
        </div>
    );
};
