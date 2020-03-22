import { TrackInfoModel } from 'store';

export interface PlayStateModel {
    tracksPlaylist: TrackInfoModel[];
}

export interface PlayDispatchModel {
    played(action): void;
}

export function mapStateToPropsPlay({ playlistReducer }): PlayStateModel {
    return { tracksPlaylist: playlistReducer.tracksInfo };
}

export function mapDispatchToPropsPlay(dispatch): PlayDispatchModel {
    return {
        played(track) {
            dispatch(track);
        }
    };
}
