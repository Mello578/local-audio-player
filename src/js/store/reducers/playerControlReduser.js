import {initialState} from './initionalState';
import {TRACK_PAUSE, TRACK_PLAY, TRACK_PLAYED} from '../../constants/playerConst';

export function playerControlReducer(state = initialState.playControl, action) {
  switch (action.type) {
    case TRACK_PLAY:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}