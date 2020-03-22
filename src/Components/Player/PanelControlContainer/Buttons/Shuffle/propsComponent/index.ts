import { TrackInfoModel } from 'store';

export interface ShuffleStateModel {
    trackList: TrackInfoModel[];
    visible: boolean;
}

export interface ShuffleDispatchModel {
    shuffled(action): void;
}

export function mapStateToPropsShuffle({ playlistReducer }): ShuffleStateModel {
    return {
        trackList: playlistReducer.tracksInfo,
        visible: playlistReducer.visible
    };
}

export function mapDispatchToPropsShuffle(dispatch): ShuffleDispatchModel {
    return {
        shuffled(track) {
            dispatch(track);
        }
    };
}
