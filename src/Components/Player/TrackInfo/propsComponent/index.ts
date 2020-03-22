import { TrackInfoModel } from 'store';

export function mapStateToPropsTrackInfo({ playerControlReducer }): TrackInfoModel {
    return playerControlReducer.trackInfo;
}
