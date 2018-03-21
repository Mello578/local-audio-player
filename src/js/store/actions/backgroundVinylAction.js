import {SET_BACKGROUND} from '../../constants/playerConst';

export function backgroundVinilAction(background) {
  return {
    type: SET_BACKGROUND,
    background
  };
}