import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showImagesPlaylistAction} from '../../store/actions/imagesPlaylistAction';
import {backgroundVinilAction} from '../../store/actions/backgroundVinylAction';
import {BACKGROUND_VINYL_DEFAULT} from '../../constants/playerConst';
import {hidePlaylist} from '../../store/actions/playlistActions';

export class VinylData extends Component {
  showImagesPlaylist() {
    const showImagesAction = showImagesPlaylistAction(true);
    const imagesVinylAction = backgroundVinilAction(BACKGROUND_VINYL_DEFAULT);
    const hidePlayListAction = hidePlaylist(false);
    this.props.showImages(showImagesAction);
    this.props.setBackgroundVinyl(imagesVinylAction);
    this.props.hidePlaylist(hidePlayListAction);
  }

  render() {
    return (
      <div className={'player-body'}>
        <div className={'player-body--center-vinyl'} style={{background: this.props.background}}>
          <img src='/src/img/vinyl.png' alt='vinyl' className={'player-body--vinyl'}
               onClick={() => this.showImagesPlaylist()}/>
        </div>
      </div>
    )
  }
}

export const Vinyl = connect(({vinylBackgroundReducer}) =>
    ({
      background: vinylBackgroundReducer.background
    })
  ,
  dispatch => ({
    showImages(mode) {
      dispatch({type: mode.type, payload: mode.data})
    },
    setBackgroundVinyl(img) {
      dispatch({type: img.type, payload: img.background})
    },
    hidePlaylist(mode) {
      dispatch({type: mode.type, payload: mode.data})
    }
  })
)(VinylData);