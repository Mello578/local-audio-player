import {SET_BUFFERED, SET_CURRENT_TIME, SET_REPEAT, TRACK_PLAY} from '../../constants/playerConst';

export function playTrack(data) {
  return {
    type: TRACK_PLAY,
    data
  };
}

export function setRepeat(data) {
  return {
    type: SET_REPEAT,
    data
  }
}

export function setBuffered(data) {
  return {
    type: SET_BUFFERED,
    data
  }
}

export function setCurrentTime(data) {
  return {
    type: SET_CURRENT_TIME,
    data
  }
}