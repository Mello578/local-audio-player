import {TRACK_PAUSE, TRACK_PLAY, TRACK_STOP} from '../constants/playerConst';

export function startPauseStopPlay(track, mode) {
  if (mode === TRACK_PLAY) {
    track.play();
  } else if (mode === TRACK_PAUSE) {
    track.pause();
  } else if (mode === TRACK_STOP) {
    track.pause();
    track.currentTime = 0.0;
  }
}
