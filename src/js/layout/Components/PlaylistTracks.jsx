import React, {Component} from 'react';
import {connect} from 'react-redux';
import {secondsFormat} from '../../utils/secondsFormat';
import {playTrack} from '../../store/actions/playerControlAction';
import {startPauseStopPlay} from '../../utils/startStopPlay';
import {TRACK_PLAY, TRACK_STOP} from '../../constants/playerConst';

class TracksOfPlaylist extends Component {


  setPlayTrack(e) {
    const numbTrack = e.target.id.replace(/\D+/g, "");
    const selectedTrack = this.props.data.find(item => (item.id === parseInt(numbTrack)));
    const dataTrack = {
      idTrack: selectedTrack.id,
      currentTrack: new Audio(selectedTrack.track),
      ...selectedTrack
    };
    //остановка текущего трека при включении следующего трека
    const track = dataTrack.currentTrack;
    if (track) {
      const playedTrack = this.props.dataPlay.currentTrack;
      if (playedTrack && track !== playedTrack) {
        startPauseStopPlay(this.props.dataPlay, TRACK_STOP);
      }
      startPauseStopPlay(dataTrack, TRACK_PLAY, this.props.volume, this.props.data)
    }
    const playTrackAction = playTrack(dataTrack);
    this.props.played(playTrackAction);
  }

  render() {
    return (
      <div className={'playlist--tracks'} style={{display: this.props.visible ? 'block' : 'none'}}>
        {
          this.props.data.map((item, key) => {
            return (
              <div key={key} className={'playlist--one-track'}>
                <img src='src/img/smallPlay.png' alt='play' id={'play' + item.id}
                     onClick={(e) => this.setPlayTrack(e)}/>
                <span className={'playlist--track-name'} id={'track-name' + item.id}
                      onClick={(e) => this.setPlayTrack(e)}>{item.trackName}</span>
                <div className={'playlist--duration'}>
                  <span id={'track-duration_' + item.id}>{secondsFormat(item.tracksDuration)}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export const PlaylistTracks = connect(({playlistReducer, playerControlReducer, soundControlReducer}) =>
    ({
      data: playlistReducer.data,
      visible: playlistReducer.visible,
      dataPlay: playerControlReducer.data,
      volume: soundControlReducer.level
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(TracksOfPlaylist);