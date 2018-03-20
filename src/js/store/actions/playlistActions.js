import {q} from '../../utils/movieTracklistImages';
import {ADD_PLAYLIST, VISIBLE_IMG_PLAYLIST} from '../../constants/playListConst';

export function playlist(data) {
  return {
    type: ADD_PLAYLIST,
    data
  };
}
