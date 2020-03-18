import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TRACK_NEXT, TRACK_PLAY} from '../../../js/constants/playerConst';
import {playTrack} from '../../../store/actions/playerControlAction';
import {audioController, startPauseStopPlay} from '../../../utils/startStopPlay';

class FollowingButton extends Component {

  nextTrack() {
    const nextTrack = audioController.nextTrack(TRACK_NEXT);
    if (nextTrack) {

      const playTrackAction = playTrack(nextTrack);
      this.props.played(playTrackAction);

      startPauseStopPlay(nextTrack, TRACK_PLAY, this.props.tracksPlaylist);
    }
  }

  render() {
    return (
      <button className={'button button-following'} onClick={() => this.nextTrack()}></button>
    )
  }
}


export const Following = connect(
  ({playlistReducer}) =>
    ({
      tracksPlaylist: playlistReducer.data
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(FollowingButton);