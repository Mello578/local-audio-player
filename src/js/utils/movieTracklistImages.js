import {store} from '../index';
import {imgsPlaylistActions} from '../store/actions/imagesPlaylistAction';
import {getData} from './getData';
import {AllData} from '../store/classes/ClassImagesPlaylist';

export async function movieTracklistImages() {
  let data = await getData();
  const id = data.map(item => item.id);
  const img = data.map(item => item.img);
  const tracks = data.map(item => item.music);
  const trackName = data.map(item => item.trackName);
  console.log('data  ', data)
  const dataImages = new AllData(id, img, tracks, trackName);
  let startDataImages = imgsPlaylistActions(dataImages);
  store.dispatch({type: startDataImages.type, payload: startDataImages.data});
}
