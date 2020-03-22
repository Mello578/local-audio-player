import { TypeKeys } from 'src/store/enums';
import { HideImage, MoveImage, MoveImages } from 'src/store/reducers/imagesPlaylistReducer';
import { ImagesPlaylist } from 'store';

export function setImagesPlaylistActions(payload: ImagesPlaylist): MoveImages {
    return {
        type: TypeKeys.MOVIE_IMGS_PLAYLIST,
        payload
    };
}

export function showImagesPlaylistAction(payload: boolean): HideImage {
    return {
        type: TypeKeys.SHOW_IMG_PLAYLIST,
        payload
    };
}

export function hideImagesPlaylistAction(payload: boolean): MoveImage {
    return {
        type: TypeKeys.HIDE_IMG_PLAYLIST,
        payload
    };
}
