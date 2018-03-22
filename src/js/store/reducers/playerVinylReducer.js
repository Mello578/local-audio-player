import {initialState} from './initionalState';
import {SET_BACKGROUND} from '../../constants/playerConst';

export function vinylBackgroundReducer(state = initialState.playerVinyl, action) {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        background: action.payload
      };

    default:
      return state;
  }
}