import { AudioControl } from 'src/store/initionalState/models';

export interface VolumeNumberStateModel {
    volume: AudioControl['volume'];
}

export function mapStateFromPropsVolumeNumber({ soundControlReducer }): VolumeNumberStateModel {
    return { volume: soundControlReducer.volume };
}
