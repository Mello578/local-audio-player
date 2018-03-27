import {TRACK_NEXT, TRACK_PAUSE, TRACK_PLAY, TRACK_STOP} from '../constants/playerConst';
import {nextPreviousTrack} from './nextPreviousTrack';
import {playTrack} from '../store/actions/playerControlAction';
import {store} from '../index';

export function startPauseStopPlay(dataTrack, mode, volume, playlist) {
  const track = dataTrack.currentTrack;
  if (mode === TRACK_PLAY) {
    track.volume = volume;
    track.play();
    nextTrack(dataTrack, playlist, volume);
  } else if (mode === TRACK_PAUSE) {
    track.pause();
  } else if (mode === TRACK_STOP) {
    track.pause();
    track.currentTime = 0.0;
  }
}

function nextTrack(dataTrack, playlist, volume) {
  const track = dataTrack.currentTrack;
  track.addEventListener('ended', () => {
    const nextTrack = nextPreviousTrack(dataTrack, playlist, TRACK_NEXT);
    if (nextTrack) {
      const dataNextTrack = {
        idTrack: nextTrack.id,
        currentTrack: new Audio(nextTrack.track),
        ...nextTrack
      };
      const playTrackAction = playTrack(dataNextTrack);
      store.dispatch({type: playTrackAction.type, payload: playTrackAction.data});
      setTimeout(() => startPauseStopPlay(dataNextTrack, TRACK_PLAY, volume, playlist), 1000);
    }
  });
}