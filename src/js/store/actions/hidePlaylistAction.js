import {HIDE_PLAYLIST} from '../../constants/playListConst';

export function hidePlaylistAction(data) {

  return {
    type: HIDE_PLAYLIST,
    data
  };
}