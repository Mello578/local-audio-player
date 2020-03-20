export function mapStateToPropsPlaylistImages({ allInfoPlaylistReducer, imagesPlaylistReducer }) {
    return {
        allInfoPlaylist: allInfoPlaylistReducer,
        imagesInfo: imagesPlaylistReducer.imagesInfo,
        visible: imagesPlaylistReducer.visible
    };
}

export function mapDispatchToPropsPlaylistImages(dispatch) {
    return {
        moviePlaylist(playlist) {
            dispatch(playlist);
        },
        hideImagesPlaylist(mode) {
            dispatch(mode);
        },
        setBackgroundVinyl(backgroundVinyl) {
            dispatch(backgroundVinyl);
        }
    };
}
