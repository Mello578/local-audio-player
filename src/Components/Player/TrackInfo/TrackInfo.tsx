import React from 'react';
import { TrackInfoModel } from 'src/store/initionalState/models';

import style from './TrackInfo.module.less';

export const TrackInfo: React.FC<TrackInfoModel> = ({ trackArtist, trackTitle, trackName }) => (
    <div>
        <span className={style.performerName}>{trackArtist}</span>
        <span className={style.trackName}>{trackTitle || trackName}</span>
    </div>
);
