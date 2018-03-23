import {startPauseStopPlay} from './startStopPlay';
import {TRACK_NEXT, TRACK_PREVIOUS, TRACK_STOP} from '../constants/playerConst';

export function nextPreviousTrack(currentTrackData, playlist, mode) {
  let nextTrack = false;
  let indexCurrentTrack = '';


  playlist.forEach((item, key) => {
    if (currentTrackData.idTrack === item.id) {
      indexCurrentTrack = key;
    }
  });

  if ((indexCurrentTrack > 0 && mode === TRACK_PREVIOUS)
    || (indexCurrentTrack < playlist.length - 1 && mode === TRACK_NEXT)) {
    startPauseStopPlay(currentTrackData.currentTrack, TRACK_STOP);
    nextTrack = mode === TRACK_NEXT
      ? playlist[indexCurrentTrack + 1]
      : playlist[indexCurrentTrack - 1]
  }

  return nextTrack
}