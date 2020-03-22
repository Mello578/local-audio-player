import { PlayerVinyl } from 'store';

export interface VinylDispatchModel {
    showImages(action): void;
    setBackgroundVinyl(action): void;
    hidePlaylist(action): void;
}

export function mapStateToPropsVinyl({ vinylBackgroundReducer }): PlayerVinyl {
    return vinylBackgroundReducer;
}

export function mapDispatchFromPropsVinyl(dispatch): VinylDispatchModel {
    return {
        showImages(data) {
            dispatch(data);
        },
        setBackgroundVinyl(background) {
            dispatch(background);
        },
        hidePlaylist(mode) {
            dispatch(mode);
        }
    };
}
