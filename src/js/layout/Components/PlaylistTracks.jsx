import React, {Component} from 'react';
import {connect} from 'react-redux';
import {secondsFormat} from '../../utils/secondsFormat';
import {playTrack} from '../../store/actions/playerControlAction';
import {startPauseStopPlay} from '../../utils/startStopPlay';
import {TRACK_NEXT, TRACK_PLAY, TRACK_STOP} from '../../constants/playerConst';
import {getName} from '../../utils/getNameArtistAndNameTrack';
import {nextPreviousTrack} from '../../utils/nextPreviousTrack';

class TracksOfPlaylist extends Component {


  setPlayTrack(e) {
    const numbTrack = e.target.id.replace(/\D+/g, "");
    const selectedTrack = this.props.data.find(item => (item.id === parseInt(numbTrack)));
    const dataTrack = {
      idTrack: selectedTrack.id,
      currentTrack: selectedTrack.track,
      ...getName(selectedTrack.trackName)
    };
    const track = dataTrack.currentTrack;
    if (track) {
      const playedTrack = this.props.dataPlay.currentTrack;

      if (playedTrack && track !== playedTrack) {
        startPauseStopPlay(playedTrack, TRACK_STOP);
      }
      track.addEventListener('ended', () => {
        const nextTrack = nextPreviousTrack(dataTrack, this.props.data, TRACK_NEXT);
        if (nextTrack) {
          const dataTrack = {
            idTrack: nextTrack.id,
            currentTrack: nextTrack.track,
            ...getName(nextTrack.trackName)
          };
          const playTrackAction = playTrack(dataTrack);
          this.props.played(playTrackAction);
          nextTrack.track = this.props.volume;
          setTimeout(() => startPauseStopPlay(nextTrack.track, TRACK_PLAY), 1000);
        }
      });
      track.volume = this.props.volume;
      startPauseStopPlay(track, TRACK_PLAY)
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