import React, {Component} from 'react';
import {connect} from 'react-redux';
import {secondsFormat} from '../../utils/secondsFormat';
import {playTrack} from '../../store/actions/playerControlAction';
import {startPauseStopPlay} from '../../utils/startStopPlay';
import {TRACK_PLAY, TRACK_STOP} from '../../constants/playerConst';
import {getName} from '../../utils/getNameArtistAndNameTrack';

class TracksOfPlaylist extends Component {

  trackDuration(track, id) {
    id = 'track-duration_' + id;
    const currentElement = document.getElementById(id);
    if (track.readyState >= 2) {
      currentElement.innerText = secondsFormat(track.duration);
    } else {
      track.addEventListener('loadedmetadata', () => {
        currentElement.innerText = secondsFormat(track.duration);
      });
    }
  }

  componentDidUpdate() {
    this.props.data.forEach((item) => {
      this.trackDuration(item.track, item.id)
    });
  }

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
      startPauseStopPlay(track, TRACK_PLAY)
    }
    console.log(this.props.dataPlay)
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
                <span className={'playlist--track-name'}  id={'track-name' + item.id}
                      onClick={(e) => this.setPlayTrack(e)}>{item.trackName}</span>
                <div className={'playlist--duration'}>
                  <span id={'track-duration_' + item.id}></span>
                </div>
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