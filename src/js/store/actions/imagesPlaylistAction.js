import {SHOW_IMG_PLAYLIST, MOVIE_IMGS_PLAYLIST, HIDE_IMG_PLAYLIST} from '../../constants/playListConst';
import {AllData} from '../classes/ClassImagesPlaylist';

export function imgsPlaylistActions(data) {
  return {
    type: MOVIE_IMGS_PLAYLIST,
    data
  };
}

export function showImgsPlaylistAction(data) {
  return {
    type: SHOW_IMG_PLAYLIST,
    data
  };
}

export function hideImgsPlaylistAction(data) {
  return {
    type: HIDE_IMG_PLAYLIST,
    data
  };
}