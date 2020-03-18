import {initialState} from '../initionalState/initionalState';
import {HIDE_PLAYLIST, SELECT_PLAYLIST, SHUFFLE_PLAYLIST} from '../../constants/playListConst';

export function playlistReducer(state = initialState.playlist, action) {
  switch (action.type) {
    case SELECT_PLAYLIST:
      return {
        data: action.payload,
        visible: true
      };
    case HIDE_PLAYLIST:
      return {
        data: state.data,
        visible: action.payload
      };
    case SHUFFLE_PLAYLIST:
      return {
        data: action.payload,
        visible: true
      };
    default:
      return state;
  }
}

