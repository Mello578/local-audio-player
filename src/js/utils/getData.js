import {URL} from '../constants/urlConst';
import {fetchPlaylist} from './fetchPlayList';

export async function getData() {
  const data = await fetchPlaylist(URL);
  return data;
}