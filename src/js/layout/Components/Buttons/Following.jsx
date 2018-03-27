import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TRACK_NEXT, TRACK_PLAY} from '../../../constants/playerConst';
import {nextPreviousTrack} from '../../../utils/nextPreviousTrack';
import {playTrack} from '../../../store/actions/playerControlAction';
import {startPauseStopPlay} from '../../../utils/startStopPlay';

class FollowingButton extends Component {

  nextTrack() {
    const nextTrack = nextPreviousTrack(this.props.dataPlay, this.props.tracksPlaylist, TRACK_NEXT);
    let dataTrack;
    if (nextTrack) {
      dataTrack = {
        idTrack: nextTrack.id,
        currentTrack: new Audio(nextTrack.track),
        ...nextTrack
      };
      const playTrackAction = playTrack(dataTrack);
      this.props.played(playTrackAction);

      startPauseStopPlay(dataTrack, TRACK_PLAY, this.props.tracksPlaylist);
    }
  }

  render() {
    return (
      <button className={'button button-following'} onClick={() => this.nextTrack()}></button>
    )
  }
}


export const Following = connect(
  ({playerControlReducer, playlistReducer, soundControlReducer}) =>
    ({
      dataPlay: playerControlReducer.data,
      tracksPlaylist: playlistReducer.data,
      volume: soundControlReducer
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(FollowingButton);