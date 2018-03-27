import {initialState} from './initionalState';
import {SET_REPEAT, SOUND_LEVEL, SOUND_MUTED, TRACK_PAUSE, TRACK_PLAY, TRACK_PLAYED} from '../../constants/playerConst';

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
    default:
      return state;
  }
}

export function soundControlReducer(state = initialState.soundLevel, action) {
  switch (action.type) {
    case SOUND_LEVEL:
      return {
        ...state,
        level: action.payload,
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