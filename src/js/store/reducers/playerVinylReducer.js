import {initialState} from '../initionalState';
import {SET_BACKGROUND} from '../../constants/playerConst';

export function playerVinylReducer(state = initialState.playerVinyl, action) {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        background: action.payload
      };

    default:
      return state;
  }
}