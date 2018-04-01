import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audioController} from '../../../utils/startStopPlay';
import {currentTimeUpdate} from '../../../utils/startStopPlay';
import {clamp} from '../../../utils/clamp';
import {getElem} from '../../../utils/getElementById';

class TrackSlider extends Component {

  setBufferedAndCurrentTime() {
    const trackData = audioController ? audioController.characteristic : null;
    // slider-box у всех одинаковый, берем нулевой элемент
    const maxWidth = getElem('slider-box0')
      ? getElem('slider-box0').offsetWidth
      : null;
    if (trackData && maxWidth) {
      const bufferElement = getElem('slider-buffering' + audioController.characteristic.trackName);
      const bufferingWidth = maxWidth * this.props.playData.buffered / 100;

      const currentTimeElement = getElem('slider-currentTime' + audioController.characteristic.trackName);
      const trackDuration = Math.round(audioController.characteristic.tracksDuration);
      const trackCurrentTime = this.props.playData.currentTime;
      let currentTimeWidth = Math.round(trackCurrentTime / (trackDuration / 100) * (maxWidth / 100));
      currentTimeWidth = clamp(currentTimeWidth, 0, maxWidth);

      if (audioController.characteristic.trackName === this.props.playData.data.trackName) {
        console.log('this.props.playData.buffered ', this.props.playData.buffered)
        bufferElement.style.width = bufferingWidth + 'px';
        currentTimeElement.style.width = currentTimeWidth + 'px';
      }

      if (currentTimeWidth === maxWidth) {
        audioController.audio.removeEventListener('timeupdate', currentTimeUpdate);
      }
    }
  }

  render() {
    this.setBufferedAndCurrentTime();
    return (
      <div className={'one-track--slider-box'} id={'slider-box' + this.props.id}>
        <div className={'slider-buffering'} id={'slider-buffering' + this.props.trackName}>
          <div className={'slider-currentTime'} id={'slider-currentTime' + this.props.trackName}></div>
        </div>
      </div>
    )
  }
}

export const TracklistSlider = connect(({playerControlReducer}) =>
    ({
      playData: playerControlReducer
    }),
  dispatch => ({})
)(TrackSlider);