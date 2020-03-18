import React from 'react';

import style from './TrackInfo.module.less';

interface Crutch {
    trackArtist: string;
    trackTitle: string;
    trackName: string;
}

export const TrackInfo: React.FC<Crutch> = ({ trackArtist, trackTitle, trackName }) => (
    <div>
        <span className={style.performerName}>{trackArtist}</span>
        <span className={style.trackName}>{trackTitle || trackName}</span>
    </div>
);
