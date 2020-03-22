import { AudioControl } from 'store';

export interface VolumeIndicatorStateModel {
    volume: AudioControl['volume'];
}

export function mapStateToPropsVolumeIndicator({ soundControlReducer }): VolumeIndicatorStateModel {
    return { volume: soundControlReducer.volume };
}
