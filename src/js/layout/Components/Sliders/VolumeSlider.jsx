import React, {Component} from 'react';
import {clamp} from '../../../utils/clamp';
import {soundLevel} from '../../../store/actions/audioControlAction';
import {WIDTH_SOUND_BAR} from '../../../constants/playerConst';
import {connect} from 'react-redux';
import {audioController, setVolumeForFirstTrack} from '../../../utils/startStopPlay';

class Volume extends Component {

  coordinates(e) {
    const soundBar = e.target;
    const sliderSound = document.getElementById('slider-sound');
    const indentElementX = Math.floor(soundBar.getBoundingClientRect().left);
    let widthElement;
    let indentClickX = e.clientX;
    let volumeAction;

    let setLevelSound = () => {
      let soundNumb = widthElement / (190 / 100) / 100;
      volumeAction = soundLevel(soundNumb);
      this.props.setVolume(volumeAction);

      if (audioController) {
        audioController.setVolumesParams({volume: soundNumb, muted: this.props.soundControl.muted});
      } else {
        setVolumeForFirstTrack({volume: this.props.soundControl.volume, muted: this.props.soundControl.muted});
      }
    };

    function scrollSound(event) {
      indentClickX = event.clientX;
      widthElement = indentClickX - indentElementX;
      widthElement = clamp(widthElement, WIDTH_SOUND_BAR.min, WIDTH_SOUND_BAR.max);
      sliderSound.style.width = clamp(widthElement, WIDTH_SOUND_BAR.min, WIDTH_SOUND_BAR.max) + 'px';
      setLevelSound();
    }

    document.addEventListener('mousemove', scrollSound);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', scrollSound);
    });

    widthElement = indentClickX - indentElementX;
    sliderSound.style.width = widthElement + 'px';

    setLevelSound();
  }

  render() {
    return (
      <div className={'player--sound-bar'} onMouseDown={(e) => this.coordinates(e)}>
        <div className={'sound-bar--slider-sound'} id={'slider-sound'}></div>
      </div>
    )
  }
}

export const VolumeSlider = connect(({playerControlReducer, soundControlReducer}) =>
    ({
      track: playerControlReducer.data.track,
      soundControl: soundControlReducer
    }),
  dispatch => ({
    setVolume(volume) {
      dispatch({type: volume.type, payload: volume.data})
    }
  })
)(Volume);