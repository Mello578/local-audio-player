import React from 'react';
import { connect } from 'react-redux';

import { VolumeNumberStateModel, mapStateFromPropsVolumeNumber } from './propsComponent';
import style from './VolumeNumber.module.less';

const VolumeNumberComponent: React.FC<VolumeNumberStateModel> = ({ volume }) => {
    return <span className={style.volumeNumber}>{Math.round(volume * 100)}</span>;
};

export const VolumeNumber = connect(mapStateFromPropsVolumeNumber)(VolumeNumberComponent);
