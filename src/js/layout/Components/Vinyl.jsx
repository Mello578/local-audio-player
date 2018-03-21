import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showImgsPlaylistAction} from '../../store/actions/showImgsPlaylistAction';
import {backgroundVinilAction} from '../../store/actions/backgroundVinylAction';
import {BACKGROUND_VINYL_DEFAUL} from '../../constants/playerConst';
import {hidePlaylistAction} from '../../store/actions/hidePlaylistAction';

export class VinylData extends Component {
  showImagesPlaylist() {
    const showImagesAction = showImgsPlaylistAction(true);
    const imagesVinylAction = backgroundVinilAction(BACKGROUND_VINYL_DEFAUL);
    const hidePlayListAction = hidePlaylistAction(false);
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

export const Vinyl = connect(({playerVinylReducer}) =>
    ({
      background: playerVinylReducer.background
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