import {SHOW_IMG_PLAYLIST} from '../../constants/playListConst';

export function showImgsPlaylistAction(data) {
  return {
    type: SHOW_IMG_PLAYLIST,
    data
  };
}