import {store} from '../index';
import {imgsPlaylistActions} from '../store/actions/imgsPlaylistActions';
import {getData} from './getData';

export async function movieTracklistImages() {
  let allData = await getData();
  let startDataImages = imgsPlaylistActions(allData);
  store.dispatch({type: startDataImages.type, payload: startDataImages.dataImages});
}
