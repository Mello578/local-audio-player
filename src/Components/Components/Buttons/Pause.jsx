import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audioController, startPauseStopPlay} from '../../../js/utils/startStopPlay';
import {TRACK_PAUSE} from '../../../js/constants/playerConst';
import {pauseTrack} from '../../../js/store/actions/playerControlAction';

export class Pause extends Component {

  pause() {
    const track = audioController.characteristic;
    if (track) {
      startPauseStopPlay(track, TRACK_PAUSE);
    }
  }

  render() {
    return (
      <button className={'button button-pause'} onClick={() => this.pause()}></button>
    )
  }
}