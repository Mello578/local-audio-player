import React, {Component} from 'react';
import {soundLevel} from '../../../js/store/actions/audioControlAction';
import {connect} from 'react-redux';
import {audioController, setVolumeForFirstTrack} from '../../../js/utils/startStopPlay';
import {setWidthSlider} from '../../../js/utils/sliderWidth';
import {WIDTH_SOUND_BAR} from '../../../js/constants/playerConst';
import {setStyleWidthElement} from '../../../js/utils/setWidthElement';

class Volume extends Component {

  coordinates(e) {

    /**
     * Если есть аудиоконтролер, то устанавливаем звуковые параметры в него, иначе устанавлмваем новые параметры для
     * первого трека
     * @param soundNumb
     * @param props
     */
    function setLevelSound(widthElement, slider, props) {
      setStyleWidthElement(slider, widthElement);

      const soundNumb = widthElement / (slider.parentNode.offsetWidth / 100) / 100;
      let volumeAction = soundLevel(soundNumb);
      props.setVolume(volumeAction);
      if (audioController) {
        audioController.setVolumesParams({volume: soundNumb, muted: props.soundControl.muted});
      } else {
        setVolumeForFirstTrack({volume: props.soundControl.volume, muted: props.soundControl.muted});
      }
    }

    const idSlider = 'slider-sound';
    setWidthSlider(e, idSlider, setLevelSound, WIDTH_SOUND_BAR, this.props);
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