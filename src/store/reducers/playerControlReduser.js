import {initialState} from './initionalState';
import {SET_BUFFERED, SET_CURRENT_TIME, SET_REPEAT, TRACK_PLAY} from '../../constants/playerConst';

export function playerControlReducer(state = initialState.playControl, action) {
  switch (action.type) {
    case TRACK_PLAY:
      return {
        ...state,
        data: action.payload,
      };
    case SET_REPEAT:
      return {
        ...state,
        repeated: action.payload
      };
    case SET_BUFFERED:
      return {
        ...state,
        buffered: action.payload
      };
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload
      };
    default:
      return state;
  }
}