import React, {Component} from 'react';
import {connect} from 'react-redux';
import {soundMute} from '../../../utils/soundMute';


class VolumeBigButton extends Component {

  muted() {
    this.props.tracksPlaylist.forEach(item=> soundMute(item.track))
  }

  render() {
    return (
      <button className={'button button-volume-big'} onClick={() => this.muted()}></button>
    )
  }
}

export const VolumeBig = connect(
  ({playlistReducer}) =>
    ({
      tracksPlaylist: playlistReducer.data
    })
)(VolumeBigButton);