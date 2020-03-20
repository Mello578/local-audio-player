import { TrackInfoModel } from 'src/store/initionalState/models';

export function mapStateToPropsTrackInfo({ playerControlReducer }): TrackInfoModel {
    return playerControlReducer.data;
}
