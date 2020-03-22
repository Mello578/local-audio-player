import { AudioControl, soundLevel } from 'store';

export interface VolumeSliderModel extends AudioControl, VolumeSliderDispatchModel {}

interface VolumeSliderDispatchModel {
    setVolume(action): void;
}

export function mapStateToPropsVolumeSlider({ soundControlReducer }): AudioControl {
    return {
        ...soundControlReducer
    };
}

export function mapDispatchToPropsVolumeSlider(dispatch): VolumeSliderDispatchModel {
    return {
        setVolume(volume) {
            dispatch(soundLevel(volume));
        }
    };
}
