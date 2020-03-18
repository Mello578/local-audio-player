import {PAUSE_ROTATE, SET_BACKGROUND, START_ROTATE, STOP_ROTATE} from '../../constants/playerConst';

export function backgroundVinylAction(background) {
  return {
    type: SET_BACKGROUND,
    background
  };
}

export function startRotate(data){
  return {
    type: START_ROTATE,
    data
  };
}

export function stopRotate(data){
  return {
    type: STOP_ROTATE,
    data
  };
}
export function pauseRotate(data){
  return {
    type: PAUSE_ROTATE,
    data
  };
}