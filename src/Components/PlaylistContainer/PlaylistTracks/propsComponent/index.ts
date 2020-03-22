import { Playlist } from 'store';

export interface PlaylistTracksDispatchModel {
    played(action): void;
}

export function mapStateToPropsPlaylistTracks({ playlistReducer }): Playlist {
    return {
        tracksInfo: playlistReducer.tracksInfo,
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
