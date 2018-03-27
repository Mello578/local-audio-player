import React, {Component} from 'react';
import {connect} from 'react-redux';
import {soundMuted} from '../../../store/actions/playlistActions';
import {setVolumeNextTrack} from '../../../utils/startStopPlay';

class VolumeBigButton extends Component {

  muted() {
    const {soundData, currentTrack} = this.props;
    currentTrack.muted = !soundData.muted;
    setVolumeNextTrack({volume: soundData.level, mute: currentTrack.muted});
    const mutedAction = soundMuted(!soundData.muted);
    this.props.setMute(mutedAction);
  }

  render() {
    return (
      <button className={'button button-volume-big'} onClick={() => this.muted()}></button>
    )
  }
}

export const VolumeBig = connect(
  ({soundControlReducer, playerControlReducer}) =>
    ({
      soundData: soundControlReducer,
      currentTrack: playerControlReducer.data.currentTrack
    }),
  dispatch => ({
    setMute(mute) {
      dispatch({type: mute.type, payload: mute.data})
    }
  })
)(VolumeBigButton);