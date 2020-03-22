import React from 'react';
import { connect } from 'react-redux';
import { soundMuted } from 'store';
import { audioController, setVolumeForFirstTrack } from 'src/utils/startStopPlay';

import {
    mapDispatchToPropsVolumeMute,
    mapStateToPropsVolumeMute,
    VolumeMuteDispatchModel,
    VolumeMuteStateModel
} from './propsComponent';
import style from './VolumeMute.module.less';

interface VolumeMuteModel extends VolumeMuteStateModel, VolumeMuteDispatchModel {
    isAdditional: boolean;
}

const VolumeMuteComponent: React.FC<VolumeMuteModel> = ({ isAdditional, soundControl, setMute }) => {
    const muted = () => {
        if (audioController) {
            audioController.setVolumesParams({ volume: soundControl.volume, muted: !audioController.audio.muted });
        } else {
            setVolumeForFirstTrack({ volume: soundControl.volume, muted: !soundControl.muted });
        }

        const mutedAction = soundMuted(!soundControl.muted);
        setMute(mutedAction);
    };

    const buttonClasses = `button ${isAdditional ? style.volumeAdditional : style.volume}`;

    return <button className={buttonClasses} onClick={muted} />;
};

export const VolumeMute = connect(
    mapStateToPropsVolumeMute,
    mapDispatchToPropsVolumeMute
)(VolumeMuteComponent);
