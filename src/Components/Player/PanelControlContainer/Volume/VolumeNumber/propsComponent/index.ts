import { AudioControl } from 'store';

export interface VolumeNumberStateModel {
    volume: AudioControl['volume'];
}

export function mapStateFromPropsVolumeNumber({ soundControlReducer }): VolumeNumberStateModel {
    return { volume: soundControlReducer.volume };
}
