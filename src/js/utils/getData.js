import {URL} from '../constants/urlConst';
import {fetchPlaylist} from './fetchPlayList';
import {Playlist} from '../store/classes/ClassPlaylist';

export async function getData() {
  let allData = await fetchPlaylist(URL);
  const id = allData.map(item=>item.id);
  const img = allData.map(item=>item.img);
  const tracks = allData.map(item=>item.music);
  return new Playlist(id, img, tracks)
}