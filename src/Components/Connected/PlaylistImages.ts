import { connect } from 'react-redux';
import { PlaylistImages } from 'src/Components/PlaylistImages';

function mapStateToProps({ allInfoPlaylistReducer, imagesPlaylistReducer }) {
    return {
        allInfoPlaylist: allInfoPlaylistReducer,
        imagesInfo: imagesPlaylistReducer.imagesInfo,
        visible: imagesPlaylistReducer.visible
    };
}

function mapDispatchToProps(dispatch) {
    return {
        moviePlaylist(playlist) {
            dispatch({ type: playlist.type, payload: playlist.data });
        },
        hideImagesPlaylist(mode) {
            dispatch({ type: mode.type, payload: mode.data });
        },
        setBackgroundVinyl(img) {
            dispatch({ type: img.type, payload: img.background });
        }
    };
}

export const ConnectedPlaylistImages = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistImages);
