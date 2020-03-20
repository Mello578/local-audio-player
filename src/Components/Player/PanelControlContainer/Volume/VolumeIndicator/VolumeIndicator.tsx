import React from 'react';
import { connect } from 'react-redux';

import { mapStateToPropsVolumeIndicator, VolumeIndicatorStateModel } from './propsComponent';
import style from './VolumeIndicator.module.less';

const VolumeIndicatorComponent: React.FC<VolumeIndicatorStateModel> = ({ volume }) => {
    const volumeLevel = Math.round(volume * 100);
    const showLevelOne = volumeLevel > 24;
    const showLevelTwo = volumeLevel > 74;
    return (
        <div className={style.container}>
            <span className={style.levelContainer}>{showLevelOne ? <span className={style.level_1} /> : null}</span>
            <span className={style.levelContainer}>{showLevelTwo ? <span className={style.level_2} /> : null}</span>
        </div>
    );
};

export const VolumeIndicator = connect(mapStateToPropsVolumeIndicator)(VolumeIndicatorComponent);
