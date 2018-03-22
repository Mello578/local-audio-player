import React, {Component} from 'react';
import {connect} from 'react-redux'
import {startPauseStopPlay} from '../../../utils/startStopPlay';
import {TRACK_PLAY} from '../../../constants/playerConst';
import {playTrack} from '../../../store/actions/playerControlAction';

export class PlayButton extends Component {

  play() {
    const {currentTrack} = this.props.dataPlay;
    const {tracksPlaylist} = this.props;

    const firstTrack = tracksPlaylist.length ? tracksPlaylist[0].track : false;
    const track = currentTrack !== null ? currentTrack : firstTrack;
    if (firstTrack) {
      if (currentTrack === null) {
        const dataTrack = {
          idTrack: firstTrack.id,
          currentTrack: track
        };
        const playTrackAction = playTrack(dataTrack);
        this.props.played(playTrackAction);
      }
      startPauseStopPlay(track, TRACK_PLAY);
    }
  }

  render() {
    return (
      <button className={'button button-play'} onClick={() => this.play()}></button>
    )
  }
}

export const Play = connect(
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
)(PlayButton);