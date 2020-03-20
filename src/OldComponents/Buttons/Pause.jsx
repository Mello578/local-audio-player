import React, { Component } from 'react';

import { audioController, startPauseStopPlay } from '../../utils/startStopPlay';
import { TRACK_PAUSE } from '../../constants/playerConst';

export class Pause extends Component {
    pause() {
        const track = audioController.characteristic;
        if (track) {
            startPauseStopPlay(track, TRACK_PAUSE);
        }
    }

    render() {
        return <button className={'button button-pause'} onClick={() => this.pause()} />;
    }
}
