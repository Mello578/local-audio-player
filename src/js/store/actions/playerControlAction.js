import {TRACK_PLAY} from '../../constants/playerConst';

export function playTrack(data) {
  return {
    type: TRACK_PLAY,
    data
  };
}
