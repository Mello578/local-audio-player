import { Playlist } from 'src/store/initionalState/models';

export interface PlaylistTracksDispatchModel {
    played(action): void;
}

export function mapStateToPropsPlaylistTracks({ playlistReducer }): Playlist {
    return {
        tracksInfo: playlistReducer.data,
        visible: playlistReducer.visible
    };
}

export function mapDispatchToPropsPlaylistTracks(dispatch): PlaylistTracksDispatchModel {
    return {
        played(track) {
            dispatch(track);
        }
    };
}
