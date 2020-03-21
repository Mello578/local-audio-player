export interface CircleSliderPropsModel {
    buffered: number;
    currentTime: number;
    trackName: string;
}

export function mapStateToPropsCircleSlider({ playerControlReducer }): CircleSliderPropsModel {
    return {
        buffered: playerControlReducer.buffered,
        currentTime: playerControlReducer.currentTime,
        trackName: playerControlReducer.data.trackName
    };
}
