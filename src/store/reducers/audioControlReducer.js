import {initialState} from '../initionalState/initionalState';
import {CURRENT_AUDIO, SOUND_LEVEL, SOUND_MUTED} from '../../constants/playerConst';

export function soundControlReducer(state = initialState.audioControl, action) {
  switch (action.type) {
    case SOUND_LEVEL:
      return {
        ...state,
        volume: action.payload,
      };
    case SOUND_MUTED:
      return {
        ...state,
        muted: action.payload
      };
    default:
      return state;
  }
}