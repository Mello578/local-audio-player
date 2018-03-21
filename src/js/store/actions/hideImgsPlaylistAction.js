import {HIDE_IMG_PLAYLIST} from '../../constants/playListConst';

export function hideImgsPlaylistAction(data) {

  return {
    type: HIDE_IMG_PLAYLIST,
    data
  };
}