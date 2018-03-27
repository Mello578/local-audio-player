import {SET_REPEAT, TRACK_PLAY} from '../../constants/playerConst';

export function playTrack(data) {
  return {
    type: TRACK_PLAY,
    data
  };
}

export function setRepeat(data){
  return {
    type: SET_REPEAT,
    data
  }
}