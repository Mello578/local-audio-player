import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audioController, startPauseStopPlay} from '../../../utils/startStopPlay';
import {currentTimeUpdate} from '../../../utils/startStopPlay';
import {clamp} from '../../../utils/clamp';
import {getElem} from '../../../utils/getElementById';
import {setStyleWidthElement} from '../../../utils/setWidthElement';
import {setWidthSlider} from '../../../utils/sliderWidth';
import {TRACK_PLAY, TRACK_STOP} from '../../../constants/playerConst';
import {playTrack} from '../../../store/actions/playerControlAction';

class TrackSlider extends Component {

  checkTrack(clickSliderBar){
    let childBar = clickSliderBar.firstChild;
    let selectTrack = childBar.id.slice(16);
    const currentTack = audioController ? audioController.characteristic.trackName : null;
    return selectTrack === currentTack;
  }

  setWidthSlider(e) {
    const widthSliderBar = e.currentTarget.offsetWidth;

    const maxMinWidth = {
      min: 0,
      max: widthSliderBar
    };

    const idSlider = 'slider-currentTime' + this.props.trackName;

    if(this.checkTrack(e.currentTarget)){
      setWidthSlider(e, idSlider, setCurrentTime, maxMinWidth);
    }

    function setCurrentTime(percent) {
      if (audioController) {
        const widthSlider = percent / (widthSliderBar / 100);
        const tracksDuration = audioController.characteristic.tracksDuration;
        const time = tracksDuration * (widthSlider / 100);
        audioController.audio.currentTime = time;
      }
    }
  }

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
      const trackDuration = audioController.characteristic.tracksDuration;
      const trackCurrentTime = this.props.playData.currentTime;
      let currentTimeWidth = trackCurrentTime / (trackDuration / 100) * (maxWidth / 100);
      currentTimeWidth = clamp(currentTimeWidth, 0, maxWidth);

      if (audioController.characteristic.trackName === this.props.playData.data.trackName) {
        setStyleWidthElement(bufferElement, bufferingWidth);
        setStyleWidthElement(currentTimeElement, currentTimeWidth);
        console.log('currentTimeWidth ', trackCurrentTime)
      }

      if (currentTimeWidth === maxWidth) {
        audioController.audio.removeEventListener('timeupdate', currentTimeUpdate);
      }
    }
  }

  render() {
    this.setBufferedAndCurrentTime();
    return (
      <div className={'one-track--slider-box'} id={'slider-box' + this.props.id}
           onMouseDown={(e) => this.setWidthSlider(e)}>
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
  dispatch => ({
    played(track) {
      dispatch({type: track.type, payload: track.data})
    }
  })
)(TrackSlider);