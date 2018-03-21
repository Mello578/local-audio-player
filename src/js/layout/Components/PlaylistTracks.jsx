import React, {Component} from 'react';
import {connect} from 'react-redux';

export class TracksOfPlaylist extends Component {

  timeDuration(seconds) {
    return seconds > 3600
      ? Math.floor(seconds / 3600) + ":" + (Math.floor(seconds / 60) - (Math.floor(seconds / 3600) * 60)) + ":" + (Math.floor(seconds % 60) < 10 ? '0' + Math.floor(seconds % 60) : Math.floor(seconds % 60))
      : (Math.floor(seconds / 60) - (Math.floor(seconds / 3600) * 60)) + ":" + (Math.floor(seconds % 60) < 10 ? '0' + Math.floor(seconds % 60) : Math.floor(seconds % 60));
  }

  trackDuration(track, id) {
    return track.addEventListener('loadedmetadata', () => {
      id = 'track-duration_' + id;

      document.getElementById(id).innerText = this.timeDuration(track.duration);
    });
  }

  render() {
    return (
      <div className={'playlist--tracks'} style={{display: this.props.visible ? 'block' : 'none'}}>
        {
          this.props.data.map((item, key) => {
            return (
              <div key={key} id={item.id} className={'playlist--one-track'}>
                <img src='src/img/smallPlay.png' alt='play'/>
                <span className={'playlist--track-name'}>{item.trackName}</span>
                <div className={'playlist--duration'}>
                  <span id={'track-duration_' + key}>{this.trackDuration(item.track, key)}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export const PlaylistTracks = connect(({playlistReducer}) =>
    ({
      data: playlistReducer.data,
      visible: playlistReducer.visible
    })
  ,
  dispatch => ({
    // moviePlaylist(playlist) {
    //   dispatch({type: playlist.type, payload: playlist.data})
    // },
    // hideImgsPlaylist(mode){
    //   dispatch({type: mode.type, payload: mode.data})
    // }
  })
)(TracksOfPlaylist);