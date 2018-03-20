import {initialState} from '../initionalState';
import {VISIBLE_IMG_PLAYLIST} from '../../constants/playListConst';

export function imgsPlaylistReducer(state = initialState.imagesPlaylist, action) {
  switch (action.type) {
    case VISIBLE_IMG_PLAYLIST:
      return {
        data: action.payload,
        visible: true
      };
    default:
      return state;
  }
}