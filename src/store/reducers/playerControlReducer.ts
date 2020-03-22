import { initialState } from 'store';
import { createReducer } from 'redux-create-reducer';
import { PlayControl, TrackInfoModel } from 'src/store/initionalState/models';
import { ReducerModel } from 'src/store/reducers/ReducerModel';
import { TypeKeys } from 'src/store/enums';

export type TrackPlay = ReducerModel<TypeKeys.SET__PLAY, TrackInfoModel>;
export type TrackRepeat = ReducerModel<TypeKeys.SET_REPEAT, boolean>;
export type TrackBuffered = ReducerModel<TypeKeys.SET_BUFFERED, number>;
export type TrackCurrentTime = ReducerModel<TypeKeys.SET_CURRENT_TIME, number>;

function trackPlay(state: PlayControl, action: TrackPlay): PlayControl {
    return {
        ...state,
        trackInfo: action.payload
    };
}

function trackRepeat(state: PlayControl, action: TrackRepeat): PlayControl {
    return {
        ...state,
        repeated: action.payload
    };
}

function trackBuffered(state: PlayControl, action: TrackBuffered): PlayControl {
    return {
        ...state,
        buffered: action.payload
    };
}

function trackCurrentTime(state: PlayControl, action: TrackCurrentTime): PlayControl {
    return {
        ...state,
        currentTime: action.payload
    };
}

export const playerControlReducer = createReducer(initialState.playControl, {
    [TypeKeys.SET__PLAY]: trackPlay,
    [TypeKeys.SET_REPEAT]: trackRepeat,
    [TypeKeys.SET_BUFFERED]: trackBuffered,
    [TypeKeys.SET_CURRENT_TIME]: trackCurrentTime
});
