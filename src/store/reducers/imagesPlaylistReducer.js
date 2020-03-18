import {initialState} from './initionalState';
import {HIDE_IMG_PLAYLIST, MOVIE_IMGS_PLAYLIST, SHOW_IMG_PLAYLIST} from '../../constants/playListConst';

export function imagesPlaylistReducer(state = initialState.imagesPlaylist, action) {
  switch (action.type) {
    case MOVIE_IMGS_PLAYLIST:
      return {
        data: action.payload,
        visible: true
      };
    case HIDE_IMG_PLAYLIST:
      return {
        data: state.data,
        visible: action.payload
      };
    case SHOW_IMG_PLAYLIST:
      return {
        data: state.data,
        visible: action.payload
      };
    default:
      return state;
  }
}