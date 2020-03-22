import React from 'react';
import { audioController, startPauseStopPlay } from 'src/utils/startStopPlay';
import { TRACK_PAUSE } from 'src/constants/playerConst';

import style from './Pause.module.less';

export const Pause: React.FC = () => {
    const pause = () => {
        const track = audioController.characteristic;
        if (track) {
            startPauseStopPlay(track, TRACK_PAUSE);
        }
    };

    return <button className={`button ${style.pause}`} onClick={pause} />;
};
