import {SELECT_PLAYLIST} from '../../constants/playListConst';

export function playlist(data) {
  return {
    type: SELECT_PLAYLIST,
    data
  };
}
