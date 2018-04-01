import React, {Component} from 'react';
import {connect} from 'react-redux';
import {secondsFormat} from '../../utils/secondsFormat';
import {playTrack} from '../../store/actions/playerControlAction';
import {audioController, startPauseStopPlay} from '../../utils/startStopPlay';
import {TRACK_PLAY, TRACK_STOP} from '../../constants/playerConst';
import {TracklistSlider} from './Sliders/TracklistSlider';

class TracksOfPlaylist extends Component {

  setPlayTrack(e) {
    const numbTrack = e.target.id.replace(/\D+/g, "");
    const selectedTrack = this.props.data.find(item => (item.id === parseInt(numbTrack)));
    //остановка текущего трека при включении следующего трека
    const track = audioController ? audioController.characteristic : audioController;
    if (track && selectedTrack.id !== track.id) {
      startPauseStopPlay(audioController.characteristic, TRACK_STOP);
    }
    startPauseStopPlay(selectedTrack, TRACK_PLAY, this.props.data);
    const playTrackAction = playTrack(selectedTrack);
    this.props.played(playTrackAction);
  }

  render() {
    return (
      <div className={'playlist--tracks'} style={{display: this.props.visible ? 'block' : 'none'}}>
        {
          this.props.data.map((item, key) => {
            return (
              <div key={key} className={'playlist--one-track'}>
                <div className={'one-track--content'}>
                  <img src='src/img/smallPlay.png' alt='play' id={'play' + item.id}
                       onClick={(e) => this.setPlayTrack(e)}/>
                  <span className={'playlist--track-name'} id={'track-name' + item.id}
                        onClick={(e) => this.setPlayTrack(e)}>{item.trackName}</span>
                  <div className={'playlist--duration'}>
                    <span id={'track-duration_' + item.id}>{secondsFormat(item.tracksDuration)}</span>
                  </div>
                </div>
                <TracklistSlider trackName={item.trackName} id={item.id}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export const PlaylistTracks = connect(({playlistReducer, playerControlReducer}) =>
    ({
      data: playlistReducer.data,
      visible: playlistReducer.visible,
      dataPlay: playerControlReducer.data
    }),
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(TracksOfPlaylist);