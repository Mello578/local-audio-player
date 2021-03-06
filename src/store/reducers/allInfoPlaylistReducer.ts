import { AllInfoPlaylist, initialState, TypeKeys } from 'store';
import { ReducerModel } from 'src/store/reducers/ReducerModel';
import { createReducer } from 'redux-create-reducer';

export type AllInfoPlaylistModel = ReducerModel<TypeKeys.ALL_INFO_PLAYLIST, AllInfoPlaylist>;

function setAllInfoPlaylist(state: AllInfoPlaylist, action: AllInfoPlaylistModel): AllInfoPlaylist {
    return action.payload;
}

export const allInfoPlaylistReducer = createReducer(initialState.allInfoPlaylist, {
    [TypeKeys.ALL_INFO_PLAYLIST]: setAllInfoPlaylist
});
