import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audioController} from '../../../utils/startStopPlay';

class TrackSlider extends Component {

  setBufferedAndCurrentTime() {
    const trackData = audioController ? audioController.characteristic : null;
    // slider-box у всех одинаковый, берем нулевой элемент
    const maxWidth = document.getElementById('slider-box0')
      ? document.getElementById('slider-box0').offsetWidth
      : null;
      if (trackData && maxWidth){
        const bufferElement = document.getElementById('slider-buffering' + audioController.characteristic.id);
        const buffering = maxWidth * this.props.playData.buffered / 100 + 'px';
        bufferElement.style.width = buffering;
      }
  }

  render() {
    this.setBufferedAndCurrentTime();
    return (
      <div className={'one-track--slider-box'} id={'slider-box' + this.props.id}>
        <div className={'slider-buffering'} id={'slider-buffering' + this.props.id}>
          <div className={'slider-currentTime'} id={'slider-currentTime' + this.props.id}></div>
        </div>
      </div>
    )
  }
}

export const TracklistSlider = connect(({playerControlReducer, mergeProps}) =>
    ({
      playData: playerControlReducer,
      mergeProps: mergeProps
    }),
  dispatch => ({})
)(TrackSlider);