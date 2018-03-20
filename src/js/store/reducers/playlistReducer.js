import {initialState} from '../initionalState';
import {ADD_PLAYLIST} from '../../constants/playListConst';

export function playlistReducer(state = initialState.playlist, action) {
  switch (action.type) {
    case ADD_PLAYLIST:
      return {
        ...state
      };

    default:
      return state;
  }
}

