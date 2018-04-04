import {store} from '../index';
import {imagesPlaylistActions} from '../store/actions/imagesPlaylistAction';
import {getData} from './getData';
import {AllData} from '../store/classes/ClassImagesPlaylist';
import {addAllDataAction} from '../store/actions/addAllDataAction';

export async function addAllData() {
  let data = await getData();
  const id = data.map(item => item.id);
  const namePlaylist = data.map(item => item.namePlaylist);
  const img = data.map(item => item.img);
  const tracks = data.map(item => item.music);
  const trackName = data.map(item => item.trackName);
  const meta = data.map(item => item.meta);
  const duration = data.map(item => item.duration);
  const allData = new AllData(id, namePlaylist, img, tracks, trackName, meta, duration);
  const dataAction = addAllDataAction(allData);
  store.dispatch({type: dataAction.type, payload: dataAction.data});
  setImagesPlaylist(id, img)
}

function setImagesPlaylist(id, images) {
  const imagesAction = imagesPlaylistActions({id, images});
  store.dispatch({type: imagesAction.type, payload: imagesAction.data});
}
