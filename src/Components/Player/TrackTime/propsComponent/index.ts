import { secondsFormat } from 'src/utils/secondsFormat';

export interface TrackTimePropsModel {
    trackDuration: string;
    trackPlayed: string;
}

export function mapStateFromPropsTrackTime({ playerControlReducer }): TrackTimePropsModel {
    return {
        trackPlayed: secondsFormat(playerControlReducer.currentTime),
        trackDuration: secondsFormat(playerControlReducer.trackInfo.tracksDuration)
    };
}
