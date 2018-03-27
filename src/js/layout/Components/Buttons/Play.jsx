import React, {Component} from 'react';
import {connect} from 'react-redux'
import {startPauseStopPlay} from '../../../utils/startStopPlay';
import {TRACK_PLAY} from '../../../constants/playerConst';
import {playTrack} from '../../../store/actions/playerControlAction';
import {getName} from '../../../utils/getNameArtistAndNameTrack';

export class PlayButton extends Component {

  play() {
    let dataPlay = this.props.dataPlay;
    const {currentTrack} = dataPlay;
    const {tracksPlaylist} = this.props;

    const firstTrack = tracksPlaylist.length ? tracksPlaylist[0].track : false;
    const track = currentTrack !== null ? currentTrack : new Audio(firstTrack);
    //проверка есть ли первый трек
    if (firstTrack) {
      //проверка нужно ли менять стейт
      if (currentTrack === null) {
        const dataTrack = {
          idTrack: firstTrack.id,
          currentTrack: track,
          ...getName(tracksPlaylist[0].trackName)
        };
        dataPlay = dataTrack;
        const playTrackAction = playTrack(dataTrack);
        this.props.played(playTrackAction);
      }
      startPauseStopPlay(dataPlay, TRACK_PLAY, this.props.volume, tracksPlaylist);
    }
  }

  render() {
    return (
      <button className={'button button-play'} onClick={() => this.play()}></button>
    )
  }
}

export const Play = connect(
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
)(PlayButton);