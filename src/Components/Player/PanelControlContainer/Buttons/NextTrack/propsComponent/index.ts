import { TrackInfoModel } from 'src/store/initionalState/models';

export interface NextTrackStateModel {
    tracksPlaylist: TrackInfoModel[];
}

export interface NextTrackDispatchModel {
    played(action): void;
}

export function mapStateToPropsNextTrack({ playlistReducer }): NextTrackStateModel {
    return { tracksPlaylist: playlistReducer.data };
}

export function mapDispatchToPropsNextTrack(dispatch): NextTrackDispatchModel {
    return {
        played(track) {
            dispatch(track);
        }
    };
}
