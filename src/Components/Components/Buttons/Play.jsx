import React, {Component} from 'react';
import {connect} from 'react-redux'
import {audioController, startPauseStopPlay} from '../../../js/utils/startStopPlay';
import {TRACK_PLAY} from '../../../js/constants/playerConst';
import {playTrack} from '../../../js/store/actions/playerControlAction';
import {getName} from '../../../js/utils/getNameArtistAndNameTrack';

export class PlayButton extends Component {

  play() {
    let track = audioController
      ? audioController.characteristic
      : this.props.tracksPlaylist
        ? this.props.tracksPlaylist[0]
        : false;
    if (track) {
      const playTrackAction = playTrack(track);
      this.props.played(playTrackAction);
    }
    startPauseStopPlay(track, TRACK_PLAY, this.props.tracksPlaylist);
  }

  render() {
    return (
      <button className={'button button-play'} onClick={() => this.play()}></button>
    )
  }
}

export const Play = connect(
  ({playlistReducer}) =>
    ({
      tracksPlaylist: playlistReducer.data
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(PlayButton);