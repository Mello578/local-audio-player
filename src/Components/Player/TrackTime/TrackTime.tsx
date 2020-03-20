import React from 'react';
import { connect } from 'react-redux';

import { mapStateFromPropsTrackTime, TrackTimePropsModel } from './propsComponent';
import style from './TrackTime.module.less';

const TrackTimeComponent: React.FC<TrackTimePropsModel> = ({ trackPlayed, trackDuration }) => {
    return (
        <div className={style.container}>
            <span>{trackPlayed}</span>
            <div className={style.timeGap} />
            <span>{trackDuration}</span>
        </div>
    );
};

export const TrackTime = connect(mapStateFromPropsTrackTime)(TrackTimeComponent);
