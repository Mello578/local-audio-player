import React, { Component } from 'react';
import { connect } from 'react-redux';

import { soundLevel } from '../../../store/actions/audioControlAction';
import { audioController, setVolumeForFirstTrack } from '../../../utils/startStopPlay';
import { setWidthSlider } from '../../../utils/sliderWidth';
import { setStyleWidthElement } from '../../../utils/setWidthElement';
import { WIDTH_SOUND_BAR } from '../../../constants/playerConst';

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
            props.setVolume(soundNumb);
            if (audioController) {
                audioController.setVolumesParams({ volume: soundNumb, muted: props.soundControl.muted });
            } else {
                setVolumeForFirstTrack({ volume: props.soundControl.volume, muted: props.soundControl.muted });
            }
        }

        const idSlider = 'slider-sound';
        setWidthSlider(e, idSlider, setLevelSound, WIDTH_SOUND_BAR, this.props);
    }

    render() {
        return (
            <div className={'player--sound-bar'} onMouseDown={e => this.coordinates(e)}>
                <div className={'sound-bar--slider-sound'} id={'slider-sound'} />
            </div>
        );
    }
}

export const VolumeSlider = connect(
    ({ playerControlReducer, soundControlReducer }) => ({
        track: playerControlReducer.data.track,
        soundControl: soundControlReducer
    }),
    dispatch => ({
        setVolume(volume) {
            dispatch(soundLevel(volume));
        }
    })
)(Volume);
