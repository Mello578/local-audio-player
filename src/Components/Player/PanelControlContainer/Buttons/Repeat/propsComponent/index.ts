export interface RepeatDispatchModel {
    setRepeatTrack(action): void;
}

export function mapDispatchToPropsRepeat(dispatch): RepeatDispatchModel {
    return {
        setRepeatTrack(isRepeat) {
            dispatch(isRepeat);
        }
    };
}
