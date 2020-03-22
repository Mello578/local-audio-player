import { TypeKeys } from 'src/store/enums';
import { HidePlaylist, SelectPlaylist, ShufflePlaylist } from 'src/store/reducers/playlistReducer';
import { TrackInfoModel } from 'store';

export function playlistAction(payload: TrackInfoModel[]): SelectPlaylist {
    return {
        type: TypeKeys.SELECT_PLAYLIST,
        payload
    };
}

export function hidePlaylistAction(payload: boolean): HidePlaylist {
    return {
        type: TypeKeys.HIDE_PLAYLIST,
        payload
    };
}

export function shufflePlaylistAction(payload: TrackInfoModel[]): ShufflePlaylist {
    return {
        type: TypeKeys.SHUFFLE_PLAYLIST,
        payload
    };
}
