import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showImagesPlaylistAction } from '../../store/actions/imagesPlaylistAction';
import { playerVinylAction } from '../../store/actions/playerVinylAction';
import { BACKGROUND_VINYL_DEFAULT } from '../../constants/playerConst';
import { hidePlaylist } from '../../store/actions/playlistActions';

import { PlayerTime } from './PlayerTime';
import { CircleSlider } from './Sliders/CircleSlider';

export class VinylData extends Component {
    showImagesPlaylist(e) {
        e.stopPropagation();

        const allBufferingSlider = document.getElementsByClassName('slider-buffering');
        const allCurrentTimeSlider = document.getElementsByClassName('slider-currentTime');
        //очищаем слайдеры при переходе в следующий плейлист
        for (let i = 0; i < allBufferingSlider.length; i++) {
            allBufferingSlider[i].style.width = 0;
            allCurrentTimeSlider[i].style.width = 0;
        }

        this.props.showImages(showImagesPlaylistAction(true));
        this.props.setBackgroundVinyl(playerVinylAction(BACKGROUND_VINYL_DEFAULT));
        this.props.hidePlaylist(hidePlaylist(false));
    }

    render() {
        const { background, rotate, pauseRotate } = this.props.data;
        return (
            <div className={'player-body'}>
                <div className={'player-body--playlist-container'}>
                    <div
                        className={'player-body--playlist-vinyl'}
                        style={{
                            background: background,
                            animation: `spin ${rotate}s linear infinite`,
                            animationPlayState: pauseRotate
                        }}
                    />
                </div>
                <img src="/src/static/images/vinyl.png" alt="vinyl" className={'player-body--vinyl'} />
                <CircleSlider />
                <div className={'player-body--select-playlist'} onClick={e => this.showImagesPlaylist(e)} />
                <PlayerTime />
            </div>
        );
    }
}

export const Vinyl = connect(
    ({ vinylBackgroundReducer }) => ({
        data: vinylBackgroundReducer
    }),
    dispatch => ({
        showImages(data) {
            dispatch(data);
        },
        setBackgroundVinyl(background) {
            dispatch(background);
        },
        hidePlaylist(mode) {
            dispatch(mode);
        }
    })
)(VinylData);
