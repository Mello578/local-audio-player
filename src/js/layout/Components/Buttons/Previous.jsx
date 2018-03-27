import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TRACK_PLAY, TRACK_PREVIOUS} from '../../../constants/playerConst';
import {playTrack} from '../../../store/actions/playerControlAction';
import {nextPreviousTrack} from '../../../utils/nextPreviousTrack';
import {startPauseStopPlay} from '../../../utils/startStopPlay';

class PreviousButton extends Component{

  previous() {
    const nextTrack = nextPreviousTrack(this.props.dataPlay, this.props.tracksPlaylist, TRACK_PREVIOUS);
    let dataTrack;
    if(nextTrack){

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

  render(){
    return(
      <button className={'button button-previous'} onClick={()=>this.previous()}></button>
    )
  }
}

export const Previous = connect(
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
)(PreviousButton);