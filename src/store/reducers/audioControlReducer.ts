import { ReducerModel } from 'src/store/reducers/ReducerModel';
import { AudioControl, initialState, TypeKeys } from 'store';
import { createReducer } from 'redux-create-reducer';

export type VolumeControl = ReducerModel<TypeKeys.SOUND_LEVEL, number>;
export type MuteControl = ReducerModel<TypeKeys.SOUND_MUTED, boolean>;

function volumeControl(state: AudioControl, action: VolumeControl): AudioControl {
    return {
        ...state,
        volume: action.payload
    };
}

function muteControl(state: AudioControl, action: MuteControl): AudioControl {
    return {
        ...state,
        muted: action.payload
    };
}

export const soundControlReducer = createReducer(initialState.audioControl, {
    [TypeKeys.SOUND_LEVEL]: volumeControl,
    [TypeKeys.SOUND_MUTED]: muteControl
});
