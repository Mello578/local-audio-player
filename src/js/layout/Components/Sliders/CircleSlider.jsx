import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audioController} from '../../../utils/startStopPlay';
import {getElem} from '../../../utils/getElementById';
import {getCurrentWidth} from '../../../utils/currentWidth';
import {CIRCLE_INDICATOR_OFFSET, CIRCLE_LENGTH_RADIUS} from '../../../constants/playerConst';

class Circle extends Component {

  setParamsSlider(sizeData, element) {
    const gap = CIRCLE_LENGTH_RADIUS - sizeData;
    element.style.strokeDasharray = `${sizeData}px ${gap}px`;
  }

  setParamsIndicator(sizeData) {
    const circleIndicator = getElem('circleIndicator');
    const dashOffset = sizeData ? CIRCLE_INDICATOR_OFFSET - sizeData : CIRCLE_INDICATOR_OFFSET;
    circleIndicator.style.strokeDashoffset = `${dashOffset}px`;
  }

  setBufferedAndCurrentTimeOfCircleSlider() {
    const trackData = audioController ? audioController.characteristic : null;
    if (trackData) {
      const circleBufferElement = getElem('circleBuffer');
      const currentTimeElement = getElem('circleCurrent');

      const {buffered, currentTime} = this.props.playData;
      const {bufferingWidth, currentTimeWidth} = getCurrentWidth(buffered, currentTime, CIRCLE_LENGTH_RADIUS * 0.75);
      if (audioController.characteristic.trackName === this.props.playData.data.trackName) {
        this.setParamsSlider(bufferingWidth, circleBufferElement);
        this.setParamsSlider(currentTimeWidth, currentTimeElement);
        this.setParamsIndicator(currentTimeWidth);
      }
    }
  }

  render() {
    this.setBufferedAndCurrentTimeOfCircleSlider();
    return (
      <svg width='300' height='300' xmlns='http://www.w3.org/2000/svg' className={'player-body--vinyl-svg'}>
        <defs>
          <linearGradient id='gradientBuffer' x1='0' y1='0' x2='100%' y2='0'>
            <stop offset='0%' stopColor={'#4e88b3'}/>
            <stop offset='100%' stopColor={'#41ac73'}/>
          </linearGradient>
          <linearGradient id='gradientCurrentTime' x1='0' y1='0' x2='100%' y2='0'>
            <stop offset='0%' stopColor={'#c12775'}/>
            <stop offset='100%' stopColor={'#7a36cf'}/>
          </linearGradient>
        </defs>
        {/*стартовый индикатор*/}
        <circle cx='148' cy='160' r='141' className='vinyl-svg-circle-start'></circle>
        <circle cx='148' cy='160' r='135' className='vinyl-svg-circle-buffer' stroke='url(#gradientBuffer)'
                id={'circleBuffer'}></circle>
        <circle cx='148' cy='160' r='135' className='vinyl-svg-circle-currentTime' stroke='url(#gradientCurrentTime)'
                id={'circleCurrent'}></circle>
        {/*индикатор (кружочек) на слайдере*/}
        <circle cx='148' cy='160' r='135' className='vinyl-svg-circle-currentTime-indicator'
                stroke='url(#gradientCurrentTime)' id={'circleIndicator'}></circle>
      </svg>
    )
  }
}

export const CircleSlider = connect(({playerControlReducer}) =>
    ({
      playData: playerControlReducer
    })
)(Circle);