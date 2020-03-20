import {
    PauseRotateModel,
    SetBackgroundModel,
    StartRotateModel,
    StopRotateModel
} from 'src/store/reducers/vinylBackgroundReducer';

import { TypeKeys } from '../enums';

export function vinylBackgroundAction(payload: string): SetBackgroundModel {
    return {
        type: TypeKeys.SET_BACKGROUND,
        payload
    };
}

export function startRotate(payload: number): StartRotateModel {
    return {
        type: TypeKeys.START_ROTATE,
        payload
    };
}

export function stopRotate(payload: number): StopRotateModel {
    return {
        type: TypeKeys.STOP_ROTATE,
        payload
    };
}
export function pauseRotate(payload: string): PauseRotateModel {
    return {
        type: TypeKeys.PAUSE_ROTATE,
        payload
    };
}
