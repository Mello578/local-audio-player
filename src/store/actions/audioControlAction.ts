import { TypeKeys } from 'src/store/enums';
import { MuteControl, VolumeControl } from 'src/store/reducers/audioControlReducer';

export function soundLevel(payload: number): VolumeControl {
    return {
        type: TypeKeys.SOUND_LEVEL,
        payload
    };
}

export function soundMuted(payload: boolean): MuteControl {
    return {
        type: TypeKeys.SOUND_MUTED,
        payload
    };
}
