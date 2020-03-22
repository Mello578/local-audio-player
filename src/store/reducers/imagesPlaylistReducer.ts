import { createReducer } from 'redux-create-reducer';
import { ImagesPlaylist, initialState, TypeKeys } from 'store';
import { ReducerModel } from 'src/store/reducers/ReducerModel';

export type MoveImages = ReducerModel<TypeKeys.MOVIE_IMGS_PLAYLIST, ImagesPlaylist>;
export type HideImage = ReducerModel<TypeKeys.HIDE_IMG_PLAYLIST, boolean>;
export type MoveImage = ReducerModel<TypeKeys.SHOW_IMG_PLAYLIST, boolean>;

function moveImages(state: ImagesPlaylist, action: MoveImages): ImagesPlaylist {
    return action.payload;
}

function hideImage(state: ImagesPlaylist, action: HideImage): ImagesPlaylist {
    return {
        ...state,
        visible: action.payload
    };
}

function moveImage(state: ImagesPlaylist, action: MoveImage): ImagesPlaylist {
    return {
        ...state,
        visible: action.payload
    };
}

export const imagesPlaylistReducer = createReducer(initialState.imagesPlaylist, {
    [TypeKeys.MOVIE_IMGS_PLAYLIST]: moveImages,
    [TypeKeys.HIDE_IMG_PLAYLIST]: hideImage,
    [TypeKeys.SHOW_IMG_PLAYLIST]: moveImage
});
