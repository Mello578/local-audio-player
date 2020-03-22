import React from 'react';
import { TrackInfoModel } from 'store';
import { connect } from 'react-redux';

import { mapStateToPropsTrackInfo } from './propsComponent';
import style from './TrackInfo.module.less';

export const TrackInfoComponent: React.FC<TrackInfoModel> = ({ trackArtist, trackTitle, trackName }) => (
    <div>
        <span className={style.performerName}>{trackArtist}</span>
        <span className={style.trackName}>{trackTitle || trackName}</span>
    </div>
);

export const TrackInfo = connect(mapStateToPropsTrackInfo)(TrackInfoComponent);
