import { TrackInfoModel } from 'src/store/initionalState/models';

export interface PlayStateModel {
    tracksPlaylist: TrackInfoModel[];
}

export interface PlayDispatchModel {
    played(action): void;
}

export function mapStateToPropsPlay({ playlistReducer }): PlayStateModel {
    return { tracksPlaylist: playlistReducer.data };
}

export function mapDispatchToPropsPlay(dispatch): PlayDispatchModel {
    return {
        played(track) {
            dispatch(track);
        }
    };
}
