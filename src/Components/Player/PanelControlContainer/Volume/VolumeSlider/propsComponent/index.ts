import { soundLevel } from 'src/store/actions/audioControlAction';
import { AudioControl } from 'src/store/initionalState/models';

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
