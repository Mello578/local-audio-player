import { TypeKeys } from 'src/store/enums';
import { TrackBuffered, TrackCurrentTime, TrackPlay, TrackRepeat } from 'src/store/reducers/playerControlReducer';
import { TrackInfoModel } from 'src/store/initionalState/models';

export function playTrack(payload: TrackInfoModel): TrackPlay {
    return {
        type: TypeKeys.SET__PLAY,
        payload
    };
}

export function setRepeat(payload: boolean): TrackRepeat {
    return {
        type: TypeKeys.SET_REPEAT,
        payload
    };
}

export function setBuffered(payload: number): TrackBuffered {
    return {
        type: TypeKeys.SET_BUFFERED,
        payload
    };
}

export function setCurrentTime(payload: number): TrackCurrentTime {
    return {
        type: TypeKeys.SET_CURRENT_TIME,
        payload
    };
}
