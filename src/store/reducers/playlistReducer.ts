import { initialState } from 'store';
import { createReducer } from 'redux-create-reducer';
import { TypeKeys } from 'src/store/enums';
import { Playlist, TrackInfoModel } from 'src/store/initionalState/models';
import { ReducerModel } from 'src/store/reducers/ReducerModel';

export type SelectPlaylist = ReducerModel<TypeKeys.SELECT_PLAYLIST, TrackInfoModel[]>;
export type HidePlaylist = ReducerModel<TypeKeys.HIDE_PLAYLIST, boolean>;
export type ShufflePlaylist = ReducerModel<TypeKeys.SHUFFLE_PLAYLIST, TrackInfoModel[]>;

function selectPlaylist(state: Playlist, action: SelectPlaylist): Playlist {
    return {
        tracksInfo: action.payload,
        visible: true
    };
}

function hidePlaylist(state: Playlist, action: HidePlaylist): Playlist {
    return {
        ...state,
        visible: action.payload
    };
}

function shufflePlaylist(state: Playlist, action: ShufflePlaylist): Playlist {
    return {
        tracksInfo: action.payload,
        visible: true
    };
}

export const playlistReducer = createReducer(initialState.playlist, {
    [TypeKeys.SELECT_PLAYLIST]: selectPlaylist,
    [TypeKeys.HIDE_PLAYLIST]: hidePlaylist,
    [TypeKeys.SHUFFLE_PLAYLIST]: shufflePlaylist
});
