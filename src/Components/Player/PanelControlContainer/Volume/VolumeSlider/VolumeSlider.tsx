import React from 'react';
import { connect } from 'react-redux';
import {
    mapDispatchToPropsVolumeSlider,
    mapStateToPropsVolumeSlider,
    VolumeSliderModel
} from 'src/Components/Player/PanelControlContainer/Volume/VolumeSlider/propsComponent';
import { audioController, setVolumeForFirstTrack } from 'src/utils/startStopPlay';
import { setWidthSlider } from 'src/utils/sliderWidth';
import { setStyleWidthElement } from 'src/utils/setWidthElement';
import { WIDTH_SOUND_BAR } from 'src/constants/playerConst';

import style from './VolumeSlider.module.less';

const VolumeSliderComponent: React.FC<VolumeSliderModel> = props => {
    const coordinates = e => {
        /**
         * Если есть аудиоконтролер, то устанавливаем звуковые параметры в него, иначе устанавлмваем новые параметры для
         * первого трека
         * @param soundNumb
         * @param props
         */
        function setLevelSound(widthElement, slider, { volume, muted, setVolume }) {
            setStyleWidthElement(slider, widthElement);

            const soundNumb = widthElement / (slider.parentNode.offsetWidth / 100) / 100;
            setVolume(soundNumb);
            if (audioController) {
                audioController.setVolumesParams({ volume: soundNumb, muted });
            } else {
                setVolumeForFirstTrack({ volume, muted });
            }
        }

        const idSlider = 'slider-sound';
        setWidthSlider(e, idSlider, setLevelSound, WIDTH_SOUND_BAR, props);
    };

    return (
        <div className={style.soundBar} onMouseDown={coordinates}>
            <div className={style.soundSlider} id={'slider-sound'} />
        </div>
    );
};

export const VolumeSlider = connect(
    mapStateToPropsVolumeSlider,
    mapDispatchToPropsVolumeSlider
)(VolumeSliderComponent);
