export enum TypeKeys {
    OTHER_ACTION = '__any_other_action_type__',
    //for allInfoPlaylistREduces
    ALL_INFO_PLAYLIST = 'allInfoPlaylist',
    //for audioControlReducer
    SOUND_LEVEL = 'audioControl',
    SOUND_MUTED = 'soundMuted',
    //for imagesPlaylistReducer
    MOVIE_IMGS_PLAYLIST = 'visibleImagesPlaylistsStart',
    HIDE_IMG_PLAYLIST = 'hideImagesPlaylists',
    SHOW_IMG_PLAYLIST = 'showImagesPlaylists',
    //for playerVinylReduser
    SET_BACKGROUND = 'setBackground',
    START_ROTATE = 'startRotate',
    STOP_ROTATE = 'stopRotate',
    PAUSE_ROTATE = 'pauseRotate',
    //for playlist
    SELECT_PLAYLIST = 'addPlaylist',
    HIDE_PLAYLIST = 'hidePlaylists',
    SHUFFLE_PLAYLIST = 'shufflePlaylists',
    //for playerControlReducer
    SET__PLAY = 'play',
    SET_REPEAT = 'repeated',
    SET_BUFFERED = 'setBufferedAndCurrentTime',
    SET_CURRENT_TIME = 'setCurrentTime'
}
