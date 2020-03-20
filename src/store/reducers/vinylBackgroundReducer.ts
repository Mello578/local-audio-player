import { createReducer } from 'redux-create-reducer';
import { ReducerModel } from 'src/store/reducers/ReducerModel';
import { TypeKeys } from 'src/store/enums';
import { PlayerVinyl } from 'src/store/initionalState/models';
import { initialState } from 'store';

export type SetBackgroundModel = ReducerModel<TypeKeys.SET_BACKGROUND, string>;
export type StartRotateModel = ReducerModel<TypeKeys.START_ROTATE, number>;
export type StopRotateModel = ReducerModel<TypeKeys.STOP_ROTATE, number>;
export type PauseRotateModel = ReducerModel<TypeKeys.PAUSE_ROTATE, string>;

function setBackground(state: PlayerVinyl, action: SetBackgroundModel): PlayerVinyl {
    return {
        ...state,
        background: action.payload
    };
}

function startRotate(state: PlayerVinyl, action: StartRotateModel): PlayerVinyl {
    return {
        ...state,
        rotate: action.payload
    };
}

function stopRotate(state: PlayerVinyl, action: StopRotateModel): PlayerVinyl {
    return {
        ...state,
        rotate: action.payload
    };
}

function pauseRotate(state: PlayerVinyl, action: PauseRotateModel): PlayerVinyl {
    return {
        ...state,
        pauseRotate: action.payload
    };
}

export const vinylBackgroundReducer = createReducer(initialState.playerVinyl, {
    [TypeKeys.SET_BACKGROUND]: setBackground,
    [TypeKeys.START_ROTATE]: startRotate,
    [TypeKeys.STOP_ROTATE]: stopRotate,
    [TypeKeys.PAUSE_ROTATE]: pauseRotate
});
