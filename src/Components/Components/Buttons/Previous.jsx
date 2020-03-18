import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TRACK_PLAY, TRACK_PREVIOUS} from '../../../js/constants/playerConst';
import {playTrack} from '../../../js/store/actions/playerControlAction';
import {audioController, startPauseStopPlay} from '../../../js/utils/startStopPlay';

class PreviousButton extends Component{

  previous() {
    const nextTrack = audioController.nextTrack(TRACK_PREVIOUS);
    if (nextTrack) {

      const playTrackAction = playTrack(nextTrack);
      this.props.played(playTrackAction);

      startPauseStopPlay(nextTrack, TRACK_PLAY, this.props.tracksPlaylist);
    }
  }

  render(){
    return(
      <button className={'button button-previous'} onClick={()=>this.previous()}></button>
    )
  }
}

export const Previous = connect(
  ({playlistReducer}) =>
    ({
      tracksPlaylist: playlistReducer.data
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(PreviousButton);