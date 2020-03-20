import React from 'react';

import { Shuffle } from '../../Components/Buttons/Shuffle';
import { Revert } from '../../Components/Buttons/Revert';
import { Previous } from '../../Components/Buttons/Previous';
import { Play } from '../../Components/Buttons/Play';
import { Following } from '../../Components/Buttons/Following';
import { VolumeSmall } from '../../Components/Buttons/VolumeSmall';
import { VolumeIndicator } from '../../Components/VolumeIndicator';
import { VolumeSlider } from '../../Components/Sliders/VolumeSlider';
import { VolumeLevel } from '../../Components/VolumeLevel';
import { VolumeBig } from '../../Components/Buttons/VolumeBig';
import { Pause } from '../../Components/Buttons/Pause';

import style from './PanelsControl.module.less';

export const PanelsControlContainer: React.FC = () => {
    return (
        <div className={style.panelControl}>
            <div className={style.buttonsControl}>
                <Revert />
                <Previous />
                <Play />
                <Following />
                <Shuffle />
            </div>
            <div className={style.volumeControls}>
                <VolumeSmall />
                <VolumeIndicator />
                <VolumeSlider />
                <VolumeLevel />
            </div>
            <div className={style.additionallyButtons}>
                <VolumeBig />
                <Pause />
            </div>
        </div>
    );
};
