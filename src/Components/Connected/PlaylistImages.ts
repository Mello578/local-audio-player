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

export const ConnectedPlaylistImages = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistImages);
