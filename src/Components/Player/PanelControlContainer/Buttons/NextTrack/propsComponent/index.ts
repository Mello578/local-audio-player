import { TrackInfoModel } from 'store';

export interface NextTrackStateModel {
    tracksPlaylist: TrackInfoModel[];
}

export interface NextTrackDispatchModel {
    played(action): void;
}

export function mapStateToPropsNextTrack({ playlistReducer }): NextTrackStateModel {
    return { tracksPlaylist: playlistReducer.tracksInfo };
}

export function mapDispatchToPropsNextTrack(dispatch): NextTrackDispatchModel {
    return {
        played(track) {
            dispatch(track);
        }
    };
}
