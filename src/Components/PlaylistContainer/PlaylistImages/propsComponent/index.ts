import { AllInfoPlaylist } from 'store';
import { ImagesPlaylist } from 'src/store/initionalState/models';

export interface PlaylistImagesStateModel extends ImagesPlaylist {
    allInfoPlaylist: AllInfoPlaylist;
}

export interface PlaylistImagesDispatchModel {
    moviePlaylist(action): void;
    hideImagesPlaylist(action): void;
    setBackgroundVinyl(action): void;
}

export function mapStateToPropsPlaylistImages({
    allInfoPlaylistReducer,
    imagesPlaylistReducer
}): PlaylistImagesStateModel {
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
