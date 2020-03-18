import React, {Component} from 'react';
import {connect} from 'react-redux';
import {soundMuted} from '../../../store/actions/audioControlAction';
import {audioController, setVolumeForFirstTrack} from '../../../utils/startStopPlay';

class VolumeBigButton extends Component {

  muted() {
    const {soundControl} = this.props;

    if (audioController) {
      audioController.setVolumesParams({volume: soundControl.volume, muted: !audioController.audio.muted});
    } else {
      setVolumeForFirstTrack({volume: soundControl.volume, muted: !soundControl.muted});
    }

    const mutedAction = soundMuted(!soundControl.muted);
    this.props.setMute(mutedAction);
  }

  render() {
    return (
      <button className={'button button-volume-big'} onClick={() => this.muted()}></button>
    )
  }
}

export const VolumeBig = connect(
  ({soundControlReducer}) =>
    ({
      soundControl: soundControlReducer
    }),
  dispatch => ({
    setMute(muted) {
      dispatch({type: muted.type, payload: muted.data})
    }
  })
)(VolumeBigButton);