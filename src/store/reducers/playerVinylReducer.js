import {initialState} from '../initionalState/initionalState';
import {PAUSE_ROTATE, SET_BACKGROUND, START_ROTATE, STOP_ROTATE} from '../../constants/playerConst';

export function vinylBackgroundReducer(state = initialState.playerVinyl, action) {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload
      };
    case START_ROTATE:
      return {
        ...state,
        rotate: action.payload
      };
    case PAUSE_ROTATE:
      return {
        ...state,
        pauseRotate: action.payload
      };
    case STOP_ROTATE:
      return {
        ...state,
        rotate: action.payload
      };

    default:
      return state;
  }
}