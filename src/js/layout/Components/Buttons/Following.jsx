import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TRACK_NEXT, TRACK_PLAY, TRACK_STOP} from '../../../constants/playerConst';
import {nextPreviousTrack} from '../../../utils/nextPreviousTrack';
import {getName} from '../../../utils/getNameArtistAndNameTrack';
import {playTrack} from '../../../store/actions/playerControlAction';
import {startPauseStopPlay} from '../../../utils/startStopPlay';

class FollowingButton extends Component {

  nextTrack() {
    const nextTrack = nextPreviousTrack(this.props.dataPlay, this.props.tracksPlaylist, TRACK_NEXT);
    if (nextTrack) {
      const dataTrack = {
        idTrack: nextTrack.id,
        currentTrack: nextTrack.track,
        ...getName(nextTrack.trackName)
      };
      const playTrackAction = playTrack(dataTrack);
      this.props.played(playTrackAction);
      if(this.props.track){
        this.props.track.volume = this.props.volume;
      }
      startPauseStopPlay(nextTrack.track, TRACK_PLAY);
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
      volume: soundControlReducer.level
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(FollowingButton);