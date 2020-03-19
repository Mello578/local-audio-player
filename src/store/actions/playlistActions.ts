import { TypeKeys } from 'src/store/enums';

export function playlist(payload) {
    return {
        type: TypeKeys.SELECT_PLAYLIST,
        payload
    };
}

export function hidePlaylist(payload) {
    return {
        type: TypeKeys.HIDE_PLAYLIST,
        payload
    };
}

export function shufflePlaylist(payload) {
    return {
        type: TypeKeys.SHUFFLE_PLAYLIST,
        payload
    };
}
