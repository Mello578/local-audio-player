import { AudioControl } from 'src/store/initionalState/models';

export interface VolumeIndicatorStateModel {
    volume: AudioControl['volume'];
}

export function mapStateToPropsVolumeIndicator({ soundControlReducer }): VolumeIndicatorStateModel {
    return { volume: soundControlReducer.volume };
}
