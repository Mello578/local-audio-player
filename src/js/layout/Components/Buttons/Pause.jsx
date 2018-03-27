import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startPauseStopPlay} from '../../../utils/startStopPlay';
import {TRACK_PAUSE} from '../../../constants/playerConst';
import {pauseTrack} from '../../../store/actions/playerControlAction';

class PauseButton extends Component {

  pause() {
    const track = this.props.dataPlay.currentTrack;
    if (track) {
      startPauseStopPlay(this.props.dataPlay, TRACK_PAUSE);
    }
  }

  render() {
    return (
      <button className={'button button-pause'} onClick={() => this.pause()}></button>
    )
  }
}

export const Pause = connect(({playerControlReducer}) =>
  ({
    dataPlay: playerControlReducer.data
  })
)(PauseButton);