import {SELECT_PLAYLIST, HIDE_PLAYLIST, SHUFFLE_PLAYLIST} from '../../constants/playListConst';

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