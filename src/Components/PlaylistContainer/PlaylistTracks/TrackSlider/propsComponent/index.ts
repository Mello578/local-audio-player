export interface TrackSliderStateModel {
    buffered: number;
    currentTime: number;
    namePlaylist: string;
}

export function mapStateToPropsTrackList({ playerControlReducer, playlistReducer }): TrackSliderStateModel {
    return {
        buffered: playerControlReducer.buffered,
        currentTime: playerControlReducer.currentTime,
        namePlaylist: playlistReducer.tracksInfo[0].namePlaylist
    };
}
