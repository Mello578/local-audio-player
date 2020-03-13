import { SHOW_IMG_PLAYLIST, MOVIE_IMGS_PLAYLIST, HIDE_IMG_PLAYLIST } from '../../constants/playListConst';

export function imagesPlaylistActions(data) {
    return {
        type: MOVIE_IMGS_PLAYLIST,
        data
    };
}

export function showImagesPlaylistAction(data) {
    return {
        type: SHOW_IMG_PLAYLIST,
        data
    };
}

export function hideImagesPlaylistAction(data) {
    return {
        type: HIDE_IMG_PLAYLIST,
        data
    };
}
