import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showImagesPlaylistAction} from '../../js/store/actions/imagesPlaylistAction';
import {backgroundVinylAction} from '../../js/store/actions/backgroundVinylAction';
import {PlayerTime} from './PlayerTime';
import {BACKGROUND_VINYL_DEFAULT} from '../../js/constants/playerConst';
import {hidePlaylist} from '../../js/store/actions/playlistActions';
import {CircleSlider} from './Sliders/CircleSlider';

export class VinylData extends Component {
  showImagesPlaylist(e) {
    e.stopPropagation();

    const allBufferingSlider = document.getElementsByClassName('slider-buffering');
    const allCurrentTimeSlider = document.getElementsByClassName('slider-currentTime');
    //очищаем слайдеры при переходе в следующий плейлист
    for (let i = 0; i < allBufferingSlider.length; i++) {
      allBufferingSlider[i].style.width = 0;
      allCurrentTimeSlider[i].style.width = 0;
    }

    const showImagesAction = showImagesPlaylistAction(true);
    const imagesVinylAction = backgroundVinylAction(BACKGROUND_VINYL_DEFAULT);
    const hidePlayListAction = hidePlaylist(false);
    this.props.showImages(showImagesAction);
    this.props.setBackgroundVinyl(imagesVinylAction);
    this.props.hidePlaylist(hidePlayListAction);
  }

  render() {
    const {background, rotate, pauseRotate} = this.props.data;
    return (
      <div className={'player-body'}>
        <div className={'player-body--playlist-container'}>
          <div className={'player-body--playlist-vinyl'} style={{background: background, animation: `spin ${rotate}s linear infinite`, animationPlayState: pauseRotate}}>
          </div>
        </div>
        <img src='/src/static/images/vinyl.png' alt='vinyl' className={'player-body--vinyl'}/>
        <CircleSlider/>
        <div className={'player-body--select-playlist'}
             onClick={(e) => this.showImagesPlaylist(e)}></div>
        <PlayerTime/>
      </div>
    )
  }
}

export const Vinyl = connect(({vinylBackgroundReducer}) =>
    ({
      data: vinylBackgroundReducer
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