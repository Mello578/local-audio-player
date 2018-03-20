import {combineReducers} from 'redux';

import {playlistReducer} from './playlistReducer';
import {imgsPlaylistReducer} from './imgsPlaylistReducer';

export default combineReducers({
  playlistReducer,
  imgsPlaylistReducer
})