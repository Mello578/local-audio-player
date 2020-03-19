import { combineReducers } from 'redux';
import { RootState } from 'src/store/initionalState/models';

import { playlistReducer } from './playlistReducer';
import { imagesPlaylistReducer } from './imagesPlaylistReducer';
import { vinylBackgroundReducer } from './playerVinylReducer';
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
