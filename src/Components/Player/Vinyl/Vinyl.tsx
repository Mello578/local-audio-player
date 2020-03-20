import React from 'react';
import { connect } from 'react-redux';
import { showImagesPlaylistAction } from 'src/store/actions/imagesPlaylistAction';
import { vinylBackgroundAction } from 'src/store/actions/vinylBackgroundAction';
import { BACKGROUND_VINYL_DEFAULT } from 'src/constants/playerConst';
import { PlayerVinyl } from 'src/store/initionalState/models';
import { hidePlaylistAction } from 'src/store/actions/playlistActions';

import { TrackTime } from '../TrackTime/TrackTime';
import { CircleSlider } from '../../../OldComponents/Sliders/CircleSlider';

import { mapDispatchFromPropsVinyl, mapStateToPropsVinyl, VinylDispatchModel } from './propsComponent';
import style from './Vinyl.module.less';

interface VinylModel extends PlayerVinyl, VinylDispatchModel {}

const VinylComponent: React.FC<VinylModel> = ({
    showImages,
    setBackgroundVinyl,
    hidePlaylist,
    background,
    rotate,
    pauseRotate
}) => {
    const showImagesPlaylist = e => {
        e.stopPropagation();

        const allBufferingSlider = document.querySelectorAll('.js-sliderBuffering');
        const allCurrentTimeSlider = document.querySelectorAll('.js-sliderCurrentTime');
        //очищаем слайдеры при переходе в следующий плейлист
        for (let i = 0; i < allBufferingSlider.length; i++) {
            const bufferingSlider = allBufferingSlider[i] as HTMLElement;
            const CurrentTimeSlider = allCurrentTimeSlider[i] as HTMLElement;
            bufferingSlider.style.width = '0';
            CurrentTimeSlider.style.width = '0';
        }

        showImages(showImagesPlaylistAction(true));
        setBackgroundVinyl(vinylBackgroundAction(BACKGROUND_VINYL_DEFAULT));
        hidePlaylist(hidePlaylistAction(false));
    };

    return (
        <div className={style.vinylContainer}>
            <div className={style.imagePlaylistContainer}>
                <div
                    className={style.imagePlaylist}
                    style={{
                        background: background,
                        // todo перетащить в модули spin, возможно убрать transform
                        animation: `spin ${rotate}s linear infinite`,
                        animationPlayState: pauseRotate
                    }}
                />
            </div>
            <img src="/src/static/images/vinyl.png" alt="vinyl" className={style.vinyl} />
            <CircleSlider />
            <div className={style.hiddenTogglePlaylist} onClick={showImagesPlaylist} />
            <TrackTime />
        </div>
    );
};

export const Vinyl = connect(
    mapStateToPropsVinyl,
    mapDispatchFromPropsVinyl
)(VinylComponent);
