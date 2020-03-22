import { TrackInfoModel } from 'src/store/initionalState/models';

export interface FollowStateModel {
    tracksPlaylist: TrackInfoModel[];
}

export interface FollowDispatchModel {
    played(action): void;
}

export function mapStateToPropsFollowing({ playlistReducer }): FollowStateModel {
    return { tracksPlaylist: playlistReducer.data };
}

export function mapDispatchToPropsFollowing(dispatch): FollowDispatchModel {
    return {
        played(track) {
            dispatch(track);
        }
    };
}
