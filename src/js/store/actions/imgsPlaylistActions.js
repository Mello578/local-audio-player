import {MOVIE_IMGS_PLAYLIST} from '../../constants/playListConst';
import {AllData} from '../classes/ClassImagesPlaylist';

export function imgsPlaylistActions(data) {
  const id = data.map(item => item.id);
  const img = data.map(item => item.img);
  const tracks = data.map(item => item.music);
  const trackName = data.map(item => item.trackName);
  const dataImages = new AllData(id, img, tracks, trackName);
  return {
    type: MOVIE_IMGS_PLAYLIST,
    dataImages
  };
}