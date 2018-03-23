import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TRACK_NEXT, TRACK_PLAY, TRACK_PREVIOUS} from '../../../constants/playerConst';
import {getName} from '../../../utils/getNameArtistAndNameTrack';
import {playTrack} from '../../../store/actions/playerControlAction';
import {nextPreviousTrack} from '../../../utils/nextPreviousTrack';
import {startPauseStopPlay} from '../../../utils/startStopPlay';

class PreviousButton extends Component{

  previous() {
    const nextTrack = nextPreviousTrack(this.props.dataPlay, this.props.tracksPlaylist, TRACK_PREVIOUS);
    console.log(nextTrack)
    if(nextTrack){

      const dataTrack = {
        idTrack: nextTrack.id,
        currentTrack: nextTrack.track,
        ...getName(nextTrack.trackName)
      };
      const playTrackAction = playTrack(dataTrack);
      this.props.played(playTrackAction);
      startPauseStopPlay(nextTrack.track, TRACK_PLAY);
    }
  }

  render(){
    return(
      <button className={'button button-previous'} onClick={()=>this.previous()}></button>
    )
  }
}

export const Previous = connect(
  ({playerControlReducer, playlistReducer}) =>
    ({
      dataPlay: playerControlReducer.data,
      tracksPlaylist: playlistReducer.data
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(PreviousButton);