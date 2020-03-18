import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audioController} from '../../../js/utils/startStopPlay';
import {getElem} from '../../../js/utils/getElementById';
import {getCurrentWidth} from '../../../js/utils/currentWidth';
import {CIRCLE_INDICATOR_OFFSET, CIRCLE_LENGTH_RADIUS} from '../../../js/constants/playerConst';
import {clamp} from '../../../js/utils/clamp';

class Circle extends Component {

  setWidthSlider(e) {
      document.addEventListener('mousemove', setCurrentTime);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', setCurrentTime);
      });

      setCurrentTime(e);

    function setCurrentTime(e) {
      if (audioController) {
        const deg = degrees(e);
        const percentSlider = deg / (180 / 100);
        const trackDuration = audioController.characteristic.tracksDuration;
        audioController.audio.currentTime = trackDuration / 100 * percentSlider;
      }
    }

    function degrees(e) {
      const coordinateMouse = {
        top: e.pageY - window.pageYOffset,
        left: e.pageX
      };
      const circleSlider = getElem('circleCurrent');
      const widthHalfElement = parseInt(circleSlider.attributes.r.nodeValue);
      const coordinatesElement = {
        // 39.5 - расстояние от нижней грани круга до начала слайдера
        bottom: circleSlider.getBoundingClientRect().bottom - 39.5,
        left: circleSlider.getBoundingClientRect().left,
      };

      // координата от центра нижней границы до левого края
      const centerSlider = coordinatesElement.left + widthHalfElement;
      const widthClick = centerSlider - coordinateMouse.left;
      const heightClick = coordinatesElement.bottom - coordinateMouse.top;
      // вычисляеи угол и переводим радианы в градусы
      let corner = Math.atan2(heightClick, widthClick) * 180 / 3.14;
      return clamp(corner, 0, 180);
    }
  }

  setGradient(dataElement) {
      return {
        y1: dataElement ? dataElement < 20 ? 88 - dataElement + '%' : 100 - dataElement + '%' : 0 + '%',
        x2: dataElement ? dataElement < 20 ? '0%' : dataElement + '%' : 0 + '%'
      }
  }

  shiftGradient() {
    if (audioController) {
      const {currentTime} = this.props.playData;
      const percentCurrentTime = currentTime / (audioController.characteristic.tracksDuration / 100);
      return Math.round(percentCurrentTime);
    } else {
      return 0;
    }
  }

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
      <svg width='300' height='300' xmlns='http://www.w3.org/2000/svg' className={'player-body--vinyl-svg'}
           onMouseDown={(e) => this.setWidthSlider(e)}>
        <defs>
          <linearGradient id='gradientBuffer'
                          y1={this.setGradient(this.props.playData.buffered).y1}
                          x2={this.setGradient(this.props.playData.buffered).x2}>
            <stop offset='0%' stopColor={'#4e88b3'}/>
            <stop offset={this.props.playData.buffered + '%'} stopColor={'#41ac73'}/>
          </linearGradient>
          <linearGradient id='gradientCurrentTime'
                          y1={this.setGradient(this.shiftGradient()).y1}
                          x2={this.setGradient(this.shiftGradient()).x2}>
            <stop offset='0%' stopColor={'#c12775'}/>
            <stop offset={this.shiftGradient() + '%'} stopColor={'#7a36cf'}/>
          </linearGradient>
        </defs>
        {/*стартовый индикатор*/}
        <circle cx='148' cy='159' r='141' className='vinyl-svg-circle-start' style={{display: this.props.playData.currentTime ? 'block' : 'none'}}></circle>
        <circle cx='148' cy='159' r='135' className='vinyl-svg-circle-buffer' stroke='url(#gradientBuffer)'
                id={'circleBuffer'}></circle>
        <circle cx='148' cy='159' r='135' className='vinyl-svg-circle-currentTime' stroke='url(#gradientCurrentTime)'
                id={'circleCurrent'}></circle>
        {/*индикатор (кружочек) на слайдере*/}
        <circle cx='148' cy='159' r='135' className='vinyl-svg-circle-currentTime-indicator'
                stroke='url(#gradientCurrentTime)' id={'circleIndicator'}  style={{display: this.props.playData.currentTime ? 'block' : 'none'}}></circle>
      </svg>
    )
  }
}

export const CircleSlider = connect(({playerControlReducer}) =>
  ({
    playData: playerControlReducer
  })
)(Circle);