import {VISIBLE_IMG_PLAYLIST} from '../../constants/playListConst';

export function imgsPlaylistActions(data) {
  const dataImages = {
    id: data.id,
    images: data.images
  };
  return {
    type: VISIBLE_IMG_PLAYLIST,
    dataImages
  };
}