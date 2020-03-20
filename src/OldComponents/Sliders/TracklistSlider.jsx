import React, { Component } from 'react';
import { connect } from 'react-redux';

import { audioController, currentTimeUpdate } from '../../utils/startStopPlay';
import { getElem } from '../../utils/getElementById';
import { setStyleWidthElement } from '../../utils/setWidthElement';
import { setWidthSlider } from '../../utils/sliderWidth';
import { getCurrentWidth } from '../../utils/currentWidth';
import { imagesPlaylistReducer } from '../../store/reducers/imagesPlaylistReducer';

class TrackSlider extends Component {
    checkTrack(clickSliderBar) {
        const childBar = clickSliderBar.firstChild;
        const selectTrack = childBar.id.slice(16);
        const currentTack = audioController ? audioController.characteristic.trackName : null;
        return selectTrack === currentTack;
    }

    setWidthSlider(e) {
        const widthSliderBar = e.currentTarget.offsetWidth;

        const maxMinWidth = {
            min: 0,
            max: widthSliderBar
        };

        const idSlider = `slider-currentTime${this.props.trackName}`;

        if (this.checkTrack(e.currentTarget)) {
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
        const maxWidth = getElem('slider-box0') ? getElem('slider-box0').offsetWidth : null;
        if (trackData && maxWidth) {
            const bufferElement = getElem(`slider-buffering${this.props.playData.data.trackName}`);
            const currentTimeElement = getElem(`slider-currentTime${this.props.playData.data.trackName}`);

            const { buffered, currentTime } = this.props.playData;
            const { bufferingWidth, currentTimeWidth } = getCurrentWidth(buffered, currentTime, maxWidth);

            if (audioController.characteristic.namePlaylist === this.props.namePlaylist) {
                setStyleWidthElement(bufferElement, bufferingWidth);
                setStyleWidthElement(currentTimeElement, currentTimeWidth);
            }

            if (currentTimeWidth === maxWidth) {
                audioController.audio.removeEventListener('timeupdate', currentTimeUpdate);
            }
        }
    }

    componentDidUpdate() {
        this.setBufferedAndCurrentTime();
    }

    render() {
        return (
            <div
                className={'one-track--slider-box'}
                id={`slider-box${this.props.id}`}
                onMouseDown={e => this.setWidthSlider(e)}
            >
                <div className={'slider-buffering'} id={`slider-buffering${this.props.trackName}`}>
                    <div className={'slider-currentTime'} id={`slider-currentTime${this.props.trackName}`} />
                </div>
            </div>
        );
    }
}

export const TracklistSlider = connect(({ playerControlReducer, playlistReducer }) => ({
    playData: playerControlReducer,
    namePlaylist: playlistReducer.data[0].namePlaylist
}))(TrackSlider);
