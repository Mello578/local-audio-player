import React from 'react';

import { Shuffle } from '../../../OldComponents/Buttons/Shuffle';
import { Revert } from '../../../OldComponents/Buttons/Revert';
import { Previous } from '../../../OldComponents/Buttons/Previous';
import { Play } from '../../../OldComponents/Buttons/Play';
import { Following } from '../../../OldComponents/Buttons/Following';
import { VolumeSmall } from '../../../OldComponents/Buttons/VolumeSmall';
import { VolumeBig } from '../../../OldComponents/Buttons/VolumeBig';
import { Pause } from '../../../OldComponents/Buttons/Pause';

import { VolumeSlider } from './Volume/VolumeSlider';
import { VolumeNumber, VolumeIndicator } from './Volume';
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
                <VolumeNumber />
            </div>
            <div className={style.additionallyButtons}>
                <VolumeBig />
                <Pause />
            </div>
        </div>
    );
};
