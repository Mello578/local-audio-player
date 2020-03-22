import { combineReducers } from 'redux';
import { RootState } from 'store';

import { playlistReducer } from './playlistReducer';
import { imagesPlaylistReducer } from './imagesPlaylistReducer';
import { vinylBackgroundReducer } from './vinylBackgroundReducer';
import { playerControlReducer } from './playerControlReducer';
import { allInfoPlaylistReducer } from './allInfoPlaylistReducer';
import { soundControlReducer } from './audioControlReducer';

export default combineReducers<Partial<RootState>>({
    allInfoPlaylistReducer,
    playlistReducer,
    imagesPlaylistReducer,
    vinylBackgroundReducer,
    playerControlReducer,
    soundControlReducer
});
