import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setStyleWidthElement } from 'src/utils/setWidthElement';
import { setWidthSlider } from 'src/utils/sliderWidth';
import { getCurrentWidth } from 'src/utils/currentWidth';
import { audioController, currentTimeUpdate } from 'src/utils/startStopPlay';

import { mapStateToPropsTrackList, TrackSliderStateModel } from './propsComponent';
import style from './TrackSlider.module.less';

interface TrackSlider extends TrackSliderStateModel{
    trackName: string;
    id: number;
}

const TrackSliderComponent: React.FC<TrackSlider> = ({
    buffered,
    currentTime,
    trackName,
    id,
    namePlaylist
}) => {
    const checkTrack = clickSliderBar => {
        const childBar = clickSliderBar.firstChild;
        const selectTrack = childBar.id.slice(16);
        const currentTack = audioController ? audioController.characteristic.trackName : null;
        return selectTrack === currentTack;
    };

    const changeWidthSlider = e => {
        const widthSliderBar = e.currentTarget.offsetWidth;

        const maxMinWidth = {
            min: 0,
            max: widthSliderBar
        };

        const idSlider = `slider-currentTime${trackName}`;

        if (checkTrack(e.currentTarget)) {
            setWidthSlider(e, idSlider, setCurrentTime, maxMinWidth);
        }

        function setCurrentTime(percent) {
            if (audioController) {
                const widthSlider = percent / (widthSliderBar / 100);
                const tracksDuration = audioController.characteristic.tracksDuration;
                audioController.audio.currentTime = tracksDuration * (widthSlider / 100);
            }
        }
    };

    const setBufferedAndCurrentTime = () => {
        const trackData = audioController ? audioController.characteristic : null;
        // slider-box у всех одинаковый, берем нулевой элемент
        const elem = document.querySelector('#slider-box0') as HTMLElement;
        // eslint-disable-next-line prettier/prettier
        const maxWidth = elem?.offsetWidth ?? null;
        if (trackData && maxWidth && audioController.characteristic.trackName === trackName) {
            const bufferElement = document.getElementById(`slider-buffering${trackName}`);
            const currentTimeElement = document.getElementById(`slider-currentTime${trackName}`);
            const { bufferingWidth, currentTimeWidth } = getCurrentWidth(buffered, currentTime, maxWidth);

            if (audioController.characteristic.namePlaylist === namePlaylist) {
                setStyleWidthElement(bufferElement, bufferingWidth);
                setStyleWidthElement(currentTimeElement, currentTimeWidth);
            }

            if (currentTimeWidth === maxWidth) {
                audioController.audio.removeEventListener('timeupdate', currentTimeUpdate);
            }
        }
    };

    useEffect(
        () => {
            setBufferedAndCurrentTime();
        }
    );

    return (
        <div className={style.sliderContainer} id={`slider-box${id}`} onMouseDown={changeWidthSlider}>
            <div className={`${style.sliderBuffering} js-sliderBuffering`} id={`slider-buffering${trackName}`}>
                <div className={`${style.sliderCurrentTime} js-sliderCurrentTime`} id={`slider-currentTime${trackName}`} />
            </div>
        </div>
    );
};

export const TrackSlider = connect(mapStateToPropsTrackList)(TrackSliderComponent);
