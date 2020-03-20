import React, { Component } from 'react';
import { connect } from 'react-redux';

import { soundMuted } from '../../store/actions/audioControlAction';
import { setVolumeForFirstTrack, audioController } from '../../utils/startStopPlay';

class VolumeSmallButton extends Component {
    muted() {
        const { soundControl } = this.props;

        if (audioController) {
            audioController.setVolumesParams({ volume: soundControl.volume, muted: !audioController.audio.muted });
        } else {
            setVolumeForFirstTrack({ volume: soundControl.volume, muted: !soundControl.muted });
        }

        const mutedAction = soundMuted(!soundControl.muted);
        this.props.setMute(mutedAction);
    }

    render() {
        return <button className={'button button-volume-small'} onClick={() => this.muted()} />;
    }
}

export const VolumeSmall = connect(
    ({ soundControlReducer }) => ({
        soundControl: soundControlReducer
    }),
    dispatch => ({
        setMute(muted) {
            dispatch({ type: muted.type, payload: muted.data });
        }
    })
)(VolumeSmallButton);
