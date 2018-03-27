import {SELECT_PLAYLIST, HIDE_PLAYLIST, SHUFFLE_PLAYLIST} from '../../constants/playListConst';
import {SOUND_LEVEL, SOUND_MUTED} from '../../constants/playerConst';

export function playlist(data) {
  return {
    type: SELECT_PLAYLIST,
    data
  };
}

export function hidePlaylist(data) {
  return {
    type: HIDE_PLAYLIST,
    data
  };
}

export function shufflePlaylist(data) {
  return {
    type: SHUFFLE_PLAYLIST,
    data
  }
}

export function soundLevel(data) {
  return {
    type: SOUND_LEVEL,
    data
  }
}

export function soundMuted(data) {
  return {
    type: SOUND_MUTED,
    data
  }
}