import React from 'react';

import { Shuffle } from '../../../OldComponents/Buttons/Shuffle';
import { Previous } from '../../../OldComponents/Buttons/Previous';
import { Play } from '../../../OldComponents/Buttons/Play';
import { Pause } from '../../../OldComponents/Buttons/Pause';

import { Following, VolumeMute, Repeat } from './Buttons';
import { VolumeSlider } from './Volume/VolumeSlider';
import { VolumeNumber, VolumeIndicator } from './Volume';
import style from './PanelsControl.module.less';

export const PanelsControlContainer: React.FC = () => {
    return (
        <div className={style.panelControl}>
            <div className={style.buttonsControl}>
                <Repeat />
                <Previous />
                <Play />
                <Following />
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
