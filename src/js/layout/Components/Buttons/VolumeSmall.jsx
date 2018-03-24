import React, {Component} from 'react';
import {connect} from 'react-redux';
import {soundMute} from '../../../utils/soundMute';

class VolumeSmallButton extends Component {

  muted() {
    this.props.tracksPlaylist.forEach(item => soundMute(item.track))
  }

  render() {
    return (
      <button className={'button button-volume-small'} onClick={() => this.muted()}></button>
    )
  }
}

export const VolumeSmall = connect(
  ({playlistReducer}) =>
    ({
      tracksPlaylist: playlistReducer.data
    })
)(VolumeSmallButton);