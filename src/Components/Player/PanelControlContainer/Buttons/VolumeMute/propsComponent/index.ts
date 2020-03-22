import { AudioControl } from 'store';

export interface VolumeMuteStateModel {
    soundControl: AudioControl;
}

export interface VolumeMuteDispatchModel {
    setMute(action): void;
}

export function mapStateToPropsVolumeMute({ soundControlReducer }) {
    return { soundControl: soundControlReducer };
}

export function mapDispatchToPropsVolumeMute(dispatch) {
    return {
        setMute(muted) {
            dispatch({ type: muted.type, payload: muted.data });
        }
    };
}
